import { Col, Row, Space, Table } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

const TransactionPage = () => {
    const columns = [
        {
            title: 'Thời gian giao dịch',
            dataIndex: 'date',
            key: 'date',
            render: (text) => (
                <Space>
                    {moment(text).tz('Asia/Ho_Chi_Minh').format('HH:mm:ss DD-MM-YYYY')}
                </Space>
            ),
        },
        {
            title: 'Số tiền',
            dataIndex: 'value',
            key: 'value',
            render: (text, record) => (
                <Space style={{ color: record.status === 1 ? 'red' : 'blue' }}>
                    {text.toLocaleString()} VNĐ
                </Space>
            ),
        },
        {
            title: 'Chú thích',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <Space>
                    {text === 1 ? 'Tiền ra' : 'Tiền vào'}
                </Space>
            ),
        },
    ];

    const { user } = useSelector((state) => state.users);

    // Sắp xếp transactionHistory theo ngày giờ giảm dần
    const sortedTransactions = (user && user.user && user.user.transactionHistory)
        ? user.user.transactionHistory.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
        : [];

    return (
        <Row justify="center" className="payment_wrapper">
            <Col xs={20}>
                <Table columns={columns} dataSource={sortedTransactions} />
            </Col>
        </Row>
    );
};

export default TransactionPage;
