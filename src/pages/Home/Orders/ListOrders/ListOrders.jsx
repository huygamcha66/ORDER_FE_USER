/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import useDecodedToken from '../../../../components/UserInfor'

import ProductItem from './components/ProductItem'
import { allOrdersService } from '../../../../service/Order'

const ListOrders = () => {
  const { decodedToken } = useDecodedToken('token')
  const [allOrders, setAllOrders] = useState()

  useEffect(() => {
    if (decodedToken) {
      fetchAllOrders(decodedToken.id)
    }
  }, [decodedToken])

  const fetchAllOrders = async (userId) => {
    const response = await allOrdersService({ userId: userId })
    setAllOrders(response.payload)
  }

  const handleUpdate = async () => {
    fetchAllOrders(decodedToken.id)
  }

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div>
            <h2>Toàn bộ đơn hàng</h2>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '1em'
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      width: '15%'
                    }}
                  >
                    Mã đơn hàng
                  </th>
                  <th
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      width: '15%'
                    }}
                  >
                    Mã vận đơn
                  </th>
                  <th
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      width: '15%'
                    }}
                  >
                    Ngày mua hàng
                  </th>
                  <th
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      width: '10%'
                    }}
                  >
                    Trạng thái
                  </th>
                  <th
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      width: '20%'
                    }}
                  >
                    Tổng tiền đơn hàng
                  </th>
                  <th
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      width: '10%'
                    }}
                  >
                    Xem chi tiết
                  </th>
                </tr>
              </thead>
              {allOrders ? (
                allOrders.map((order, index) => {
                  return <ProductItem handleUpdate={handleUpdate} key={index} order={order} />
                })
              ) : (
                <span className="green">Hiện tại không có sản phẩm nào trong giỏ hàng</span>
              )}
            </table>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ListOrders
