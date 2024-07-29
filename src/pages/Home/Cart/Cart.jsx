/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  deleteProductFromCart,
  getCartDetail,
  resetState,
  updateProductFromCart
} from '../../../redux/cartSlice/cartSlice'
import { jwtDecode } from 'jwt-decode'
import './Cart.css'
import { Checkbox, Col, Empty, Flex, Image, Input, Modal, notification, Row, Space } from 'antd'
import useDecodedToken from '../../../components/UserInfor'
import { MdOutlineDelete } from 'react-icons/md'
import { openNotificationWithIcon } from '../../../components/Nofitication'

const ProductItem = memo(({ cart, index, isCheck, onCheckChange, onQuantityChange, onDelete }) => {
  const [quantity, setQuantity] = useState(cart.quantity)
  const [api, contextHolder] = notification.useNotification()
  const dispatch = useDispatch()

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value
    setQuantity(newQuantity)
    onQuantityChange(index, newQuantity, cart.productId)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleConfirmDelete = () => {
    onDelete(cart.productId)
    setIsModalOpen(false)
    openNotificationWithIcon('success', 'Xoá sản phẩm thành công')
  }


  return (
    <>
      {contextHolder}
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center">
              <Checkbox
                type="checkbox"
                checked={isCheck}
                onChange={() => onCheckChange(index, !isCheck, cart.productId)}
              />
            </Flex>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <div style={{ display: 'flex' }}>
              {cart.coverImageUrl.startsWith('https') ? (
                <img
                  src={cart.coverImageUrl}
                  alt="Sản phẩm"
                  style={{
                    width: '50px',
                    marginRight: '10px',
                    height: '50px'
                  }}
                />
              ) : (
                <video
                  // className="hoverVideo"
                  className="video_thumbnail"
                  src={`https:${cart.coverImageUrl}`}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                  controls={false}
                >
                  Trình duyệt không hỗ trợ ảnh
                </video>
              )}
              <a target="_blank" className="cart_name" href={cart.productUrl}>
                {cart.name}
              </a>
            </div>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Input type="number" value={quantity} min={1} onChange={handleQuantityChange} />
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            {parseInt((cart.price * 3625).toFixed(0)).toLocaleString('vi-VN')} đ
            <br />¥{cart.price.toLocaleString('zh-CN')}
          </td>
          <td
            style={{
              border: '1px solid #ddd',
              padding: '8px',
              fontWeight: 'bolder'
            }}
          >
            {parseInt((cart.price * 3625 * quantity).toFixed(0)).toLocaleString('vi-VN')} đ
            <br />¥{(cart.price * quantity).toLocaleString('zh-CN')}
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <div>
              <div style={{ padding: '4px 0px' }}>
                <Space style={{ width: '90px' }}>Tiền hàng:</Space>
                <span style={{ fontWeight: 'bold' }}>
                  {isCheck
                    ? `${parseInt((cart.price * 3625 * quantity).toFixed(0)).toLocaleString('vi-VN')}
                    đ`
                    : 0}
                </span>
              </div>
              <div style={{ padding: '4px 0px' }}>
                <Space style={{ width: '90px' }}>Phí tạm tính:</Space>
                <span style={{ fontWeight: 'bold' }}>
                  {isCheck
                    ? `${parseInt((cart.price * 3625 * quantity * 0.03).toFixed(0)).toLocaleString(
                      'vi-VN'
                    )}
                    đ`
                    : 0}
                </span>
              </div>
              <div style={{ padding: '4px 0px' }}>
                <Space style={{ width: '90px' }}>Đặt cọc:</Space>
                <span style={{ fontWeight: 'bold' }}>
                  {isCheck
                    ? `${parseInt((cart.price * 3625 * quantity * 0.7 * 1.03).toFixed(0)).toLocaleString(
                      'vi-VN'
                    )}
                    đ`
                    : 0}
                </span>
              </div>
              <div style={{ padding: '4px 0px' }}>
                <Space style={{ width: '90px' }}>Tổng:</Space>
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  {isCheck
                    ? `${parseInt((cart.price * 3625 * quantity * 1.03).toFixed(0)).toLocaleString(
                      'vi-VN'
                    )}
                    đ`
                    : 0}
                </span>
              </div>
            </div>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center">
              <button
                onClick={showModal}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer'
                }}
              >
                <MdOutlineDelete style={{ width: '20px', height: '20px' }} />
              </button>
              <Modal
                title="Bạn muốn xoá sản phẩm này chứ?"
                open={isModalOpen}
                onOk={handleConfirmDelete}
                onCancel={handleCancel}
                cancelButtonProps={{
                  style: {
                    backgroundColor: '#f5222d',
                    borderColor: '#f5222d',
                    color: '#fff'
                  }
                }}
                okButtonProps={{
                  style: {
                    backgroundColor: '#ccc',
                    color: '#000'
                  }
                }}
                okText="Có"
                cancelText="Không"
              ></Modal>
            </Flex>
          </td>
        </tr>
      </tbody>
    </>
  )
})

const Cart = () => {
  const { carts } = useSelector((state) => state.carts)
  const { user } = useSelector((state) => state.users)
  const { decodedToken } = useDecodedToken('token')
  const dispatch = useDispatch()

  const [allCheck, setAllCheck] = useState(false)
  const [totalCheckedPrice, setTotalCheckedPrice] = useState(0)
  const [checkedStates, setCheckedStates] = useState([])
  const [quantities, setQuantities] = useState([])

  const location = useLocation()
  // useEffect(() => {
  //   if (decodedToken) {
  //     dispatch(getCartDetail({ userId: decodedToken.id }))
  //   }
  // }, [decodedToken, dispatch, location.pathname])

  useEffect(() => {
    if (carts && carts.products) {
      const newCheckedStates = carts.products.map((cart) => cart.check)
      const newQuantities = carts.products.map((cart) => cart.quantity)
      setCheckedStates(newCheckedStates)
      setQuantities(newQuantities)
    }
  }, [carts])

  useEffect(() => {
    if (checkedStates.length > 0) {
      setAllCheck(checkedStates.every((isChecked) => isChecked))
    }
  }, [checkedStates])

  useEffect(() => {
    const totalPrice =
      carts &&
      carts.products &&
      carts.products.reduce((acc, cart, index) => {
        if (checkedStates[index]) {
          return acc + cart.price * 3625 * quantities[index]
        }
        return acc
      }, 0)
    setTotalCheckedPrice(totalPrice * 1.03)
  }, [checkedStates, quantities, carts])

  const handleCheckChange = async (index, isChecked, productId) => {
    const newCheckedStates = [...checkedStates]
    newCheckedStates[index] = isChecked
    setCheckedStates(newCheckedStates)
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        await dispatch(
          updateProductFromCart({
            userId: decodedToken.id,
            check: isChecked,
            productId: productId,
            newQuantity: quantities[index]
          })
        ).unwrap()

      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error);
      } finally {
        setIsUpdating(false);
      }
    };
    await updateCartProducts();
  }

  const handleAllCheckChange = async () => {
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        const promises = carts.products.map((product, index) =>
          dispatch(
            updateProductFromCart({
              userId: decodedToken.id,
              newQuantity: quantities[index],
              check: !allCheck,
              productId: product.productId
            })
          ).unwrap()
        )

        // Đợi tất cả các promises hoàn thành
        await Promise.all(promises)

        // Chuyển hướng sau khi tất cả các updates hoàn thành
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
    const newAllCheck = !allCheck
    setAllCheck(newAllCheck)
    setCheckedStates(new Array(carts.products.length).fill(newAllCheck))

  }

  const handleQuantityChange = async (index, newQuantity, productId) => {
    const newQuantities = [...quantities]
    newQuantities[index] = parseInt(newQuantity)
    setQuantities(newQuantities)
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        await dispatch(
          updateProductFromCart({
            userId: decodedToken.id,
            check: checkedStates[index],
            productId: productId,
            newQuantity: newQuantity
          })
        ).unwrap()

      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error);
      } finally {
        setIsUpdating(false);
      }
    };
    await updateCartProducts();
  }

  const navigate = useNavigate()

  const handlePlaceOrder = async () => {
    // console.log("««««« totalCheckedPrice »»»»»", totalCheckedPrice);
    if (!totalCheckedPrice) {
      return openNotificationWithIcon('error', 'Vui lòng chọn sản phẩm')
    }
    // improve: dùng unwrap() để sử dụng async await đối với js redux-thunk
    // sử dụng trycatch để bắt lỗi
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        const promises = carts.products.map((product, index) =>
          dispatch(
            updateProductFromCart({
              userId: decodedToken.id,
              newQuantity: quantities[index],
              check: checkedStates[index],
              productId: product.productId
            })
          ).unwrap()
        )

        // Đợi tất cả các promises hoàn thành
        await Promise.all(promises)

        // Chuyển hướng sau khi tất cả các updates hoàn thành
        navigate('/cart/step2')
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
  }
  const [isModalOpen, setIsModalOpen] = useState(false)

  // fix_huyg Phải đưa tất cả các hàm (CRUD) của hàm con về hàm cha hết
  // vì nó bị re-render theo số lương của hàm con, không kiểm soát được, bug 2 ngày mới fix được đó.
  const handleDelete = async (productId) => {
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        const promises = carts.products.map((product, index) =>
          dispatch(
            updateProductFromCart({
              userId: decodedToken.id,
              newQuantity: quantities[index],
              check: checkedStates[index],
              productId: product.productId
            })
          ).unwrap()
        )
        // Đợi tất cả các promises hoàn thành
        await Promise.all(promises)
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
    setIsModalOpen(false)
    dispatch(deleteProductFromCart({ userId: decodedToken.id, productId }))
  }

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isUpdating) {
        event.preventDefault();
        event.returnValue = ''; // Cần để hiển thị hộp thoại cảnh báo trên một số trình duyệt
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isUpdating]);


  return (
    <>
      {carts && carts.products && carts.products.length ? (
        <Row justify="center">
          <Col xs={20}>
            <div>
              <h2>Giỏ hàng</h2>

              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '1em'
                }}
              >
                {' '}
                <thead>
                  <tr>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '10%'
                      }}
                    >
                      Chọn mua
                    </th>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '30%'
                      }}
                    >
                      Sản phẩm
                    </th>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '10%'
                      }}
                    >
                      Số lượng
                    </th>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '10%'
                      }}
                    >
                      Đơn giá
                    </th>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '15%'
                      }}
                    >
                      Tổng tiền
                    </th>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '20%'
                      }}
                    >
                      Đơn giá
                    </th>
                    <th
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        width: '5%'
                      }}
                    >
                      Xoá
                    </th>
                  </tr>
                </thead>
                {carts && carts.products ? (
                  carts.products.map((cart, index) => (
                    <ProductItem
                      key={index}
                      cart={cart}
                      index={index}
                      isCheck={checkedStates[index]}
                      onCheckChange={handleCheckChange}
                      onQuantityChange={handleQuantityChange}
                      onDelete={handleDelete}
                    />
                  ))
                ) : (
                  <span className="green">Hiện tại không có sản phẩm nào trong giỏ hàng</span>
                )}
              </table>

              <Flex className="wrapper_buy_step_1" justify="space-between">
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    checked={allCheck}
                    onChange={handleAllCheckChange}
                    type="checkbox"
                    style={{ width: '25px', height: '25px', cursor: 'pointer' }}
                  />
                  <Space>Chọn mua toàn bộ các sản phẩm</Space>
                </label>
                <Space>
                  <h4> Tổng tiền hàng:</h4>
                  <span style={{ color: 'red' }}>
                    {totalCheckedPrice &&
                      parseInt(totalCheckedPrice.toFixed(0)).toLocaleString('vi-VN')}
                    đ
                  </span>
                </Space>
                <button className="btn_step_1" onClick={handlePlaceOrder}>
                  Đặt hàng ngay
                </button>
              </Flex>
            </div>
          </Col>
        </Row>
      ) : (
        <Empty style={{ marginTop: '30px' }} description={<span>Không có sản phẩm nào</span>} />
      )}
    </>
  )
}

export default Cart
