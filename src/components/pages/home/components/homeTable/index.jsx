import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Modal, Table } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { operaciones } from '../../../../../utils/mocked-data'

const Wrapper = styled.div`
  overflow: auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const HomeTable = () => {
  const [operations, setOperations] = useState([])
  console.log(operaciones)

  useEffect(() => {
    setOperations(operaciones)
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id ',
    },
    {
      title: 'Concept',
      dataIndex: 'concept',
      key: 'concept',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      filters: [
        {
          text: 'Ingreso',
          value: 'Ingreso',
        },
        {
          text: 'Egreso',
          value: 'Egreso',
        },
      ],
      key: 'type',
      onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (operation) => {
        function onClick() {
          return handleDelete(operation)
        }

        return (
          <>
            <EditOutlined />
            <DeleteOutlined
              onClick={onClick}
              style={{ color: 'red', marginLeft: 12 }}
            />
          </>
        )
      },
    },
  ]

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  const handleDelete = (operation) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this opartion record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setOperations((pre) => {
          return pre.filter((op) => op.id !== operation.id)
        })
      },
    })
  }

  return (
    <Wrapper>
      <Table
        dataSource={operations}
        columns={columns}
        pagination={false}
        onChange={onChange}
      />
      <ButtonWrapper>
        <Button onClick={console.log('Button clicked')}>
          Add new Operation.
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default HomeTable
