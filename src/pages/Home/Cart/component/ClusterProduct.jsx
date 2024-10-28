import { Checkbox, Flex, Space } from "antd"
import { MdOutlineDelete } from "react-icons/md"
import ProductItem from "./ProductItem"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { checkAllProductInOneCluster, updateProductFromCart } from "../../../../redux/cartSlice/cartSlice"
import { feeService } from "../../../../utils"

const ClusterProduct = ({ item, index, userId, setPriceCluster, priceCluster }) => {
  //  ** Redux
  const dispatch = useDispatch()

  // ** State
  // lưu cụm sản phẩm để thay đổi giá theo số lượng(ảo)
  // tránh gọi trực tiếp lên api liên tục
  const [clusterItem, setClusterItem] = useState(item.products)

  // lưu cách giá trị được check vào 1 mảng
  const [selected, setSelected] = useState([])

  //  ** Load from database
  useEffect(() => {
    // setClusterItem(item)
    const temp = item.products.reduce((acc, item) => {
      if (item.check) {
        acc.push(item.productId)
      }
      return acc
    },
      []
    )
    setSelected(temp)
  }, [item])

  // đưa các product được chọn vào mảng
  const handleCheckSelected = async (productId) => {
    if (selected.includes(productId)) {
      const temp = selected.filter(item => item !== productId)

      // cập nhật lại giá trị cho cụm cluster với check
      setClusterItem((prev) => prev.map((item) => {
        if (item.productId === productId) {
          return { ...item, check: false }
        }
        return item
      }))

      setSelected(temp)
    }
    else {
      setClusterItem((prev) => prev.map((item) => {
        if (item.productId === productId) {
          return { ...item, check: true }
        }
        return item
      }))
      setSelected((prev) => ([...prev, productId]));
    }

    // update lên api
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        await dispatch(
          updateProductFromCart({
            userId: userId,
            productId: productId,
            location: +index,
            check: true
          })
        ).unwrap()
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
  }

  // update lên api 
  const updateCheckAllInOneCluster = async (check) => {
    try {
      // Tạo một mảng các promises từ map
      await dispatch(
        checkAllProductInOneCluster({
          userId: userId,
          location: +index,
          check: check
        })
      ).unwrap()
    } catch (error) {
      // Xử lý lỗi nếu có
      console.log('««««« error »»»»»', error)
    }
  }

  // Hàm xử lý khi check all
  const handleCheckAll = async () => {
    const isAllSelected = selected.length === item.products.length;
    const newCheckStatus = !isAllSelected;

    if (isAllSelected) {
      setSelected([]);
      setClusterItem(prev => prev.map(item => ({ ...item, check: false })));
    } else {
      const productIds = item.products.map(product => product.productId);
      setSelected(productIds);
      setClusterItem(prev => prev.map(item => ({ ...item, check: true })));
    }

    // Cập nhật lên API với trạng thái mới
    await updateCheckAllInOneCluster(newCheckStatus);
  };

  // Hàm cập nhật số lượng sản phẩm
  const handleQuantityChange = async (productId, newQuantity) => {
    const updatedProducts = clusterItem.map((product) => {
      if (productId === product.productId) {
        return { ...product, quantity: newQuantity }
      }
      return product
    })

    setClusterItem(updatedProducts)

    // cập nhật lên api
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        await dispatch(
          updateProductFromCart({
            userId: userId,
            productId: productId,
            location: +index,
            newQuantity: newQuantity
          })
        ).unwrap()
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
  }

  useEffect(() => {
    setPriceCluster(index, clusterItem)
  }, [clusterItem, selected])

  // console.log('««««« priceCluster[index] »»»»»', priceCluster[index], index);
  return (
    <>
      <div style={{ marginTop: '20px' }} key={item._id}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  width: '10%'
                }}
              >
                <Checkbox
                  type="checkbox"
                  onChange={handleCheckAll}
                  checked={selected.length === item.products.length}
                // onChange={() => onCheckChange(index, !isCheck, cart.productId)}
                />
              </th>
              <>
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
                    width: '15%'
                  }}
                >
                  Đơn giá
                </th>
                <th
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    width: '20%'
                  }}
                >
                  Tổng tiền
                </th>
                <th
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    width: '5%'
                  }}
                >
                  <Flex justify="center">
                    <button
                      // onClick={showModal}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'red',
                        cursor: 'pointer'
                      }}
                    >
                      <MdOutlineDelete style={{ width: '20px', height: '20px' }} />
                    </button>
                    {/* <Modal
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
          ></Modal> */}
                  </Flex>
                </th>
              </>

            </tr>
          </thead>
          <tbody>
            {clusterItem.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                cart={item}
                index={index}
                handleChangeSelected={handleCheckSelected}
                selected={selected}
                onQuantityChange={handleQuantityChange}

              />
            ))}


          </tbody>
        </table>
      </div>
      {/* Hiển thị tổng giá trị */}
      <Space style={{ display: 'flex' }}>
        <div>
          Tiền hàng: {
            priceCluster[index] ?
              parseInt(priceCluster[index].totalPrice.toFixed(0)).toLocaleString('vi-VN') : 0} đ
        </div>
        <div>
          Phí dịch vụ: {priceCluster[index] ? priceCluster[index].feeService : 3} %
        </div>
        <div>
          Tổng giá tiền: {priceCluster[index] ? parseInt((priceCluster[index].totalPrice + priceCluster[index].totalPrice * priceCluster[index].feeService / 100).toFixed(0)).toLocaleString('vi-VN') : 0} đ
        </div>
      </Space>
    </>
  )
}
export default ClusterProduct
