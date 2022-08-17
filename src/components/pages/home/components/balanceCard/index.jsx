import { Button, Col, Row, Statistic } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'

const URL = 'http://localhost:3001/operations'

const BalanceCard = () => {
  const fetchServerData = async () => {
    const data = await axios.get(URL)
    console.log(data.data.data)
  }
  useEffect(() => fetchServerData(), [])

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (ARG)" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          Recharge
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>
    </Row>
  )
}

export default BalanceCard
