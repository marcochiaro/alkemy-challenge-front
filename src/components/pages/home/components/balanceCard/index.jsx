import { Col, Row, Statistic } from 'antd'

const BalanceCard = ({ balance }) => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic
          title="Account Balance (ARG)"
          value={balance}
          precision={2}
          style={{
            marginBottom: '15px',
          }}
        />
      </Col>
    </Row>
  )
}

export default BalanceCard
