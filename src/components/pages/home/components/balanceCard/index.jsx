import { Button, Col, Row, Statistic } from 'antd'
import { useEffect, useState } from 'react'

import { getOperations } from '../../../../../services/services'

const BalanceCard = () => {
  const [operations, setOperations] = useState([])
  const [totalEntrys] = useState(0)
  const [balance, setBalance] = useState(0)

  const fetchServerData = async () => {
    try {
      const info = await getOperations()
      const result = info.data.data
      setOperations(result)
    } catch (error) {
      console.error(error)
    }
  }

  const getTotalBalance = () => {
    let balanceTotal = 0
    operations.map((op) => {
      balanceTotal += op.amount
    })
    setBalance(balanceTotal)
  }

  useEffect(() => {
    fetchServerData()
  }, [])

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={totalEntrys} />
      </Col>
      <Col span={12}>
        <Statistic
          title="Account Balance (ARG)"
          value={balance}
          precision={2}
        />
        <Button
          style={{ marginTop: 16 }}
          type="primary"
          onClick={getTotalBalance}
        >
          Get Total Balance
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>
    </Row>
  )
}

export default BalanceCard
