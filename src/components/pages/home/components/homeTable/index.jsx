import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Modal, Table } from 'antd'
import { useEffect } from 'react'
import styled from 'styled-components'

import { deleteOperation } from '../../../../../services/services'

const Wrapper = styled.div`
  overflow: auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const HomeTable = ({ operations, getAllOperations, isLoading }) => {
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
      dataIndex: 'createdAt',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      filters: [
        {
          text: 'Entry',
          value: 'ENTRY',
        },
        {
          text: 'Outflow',
          value: 'OUTFLOW',
        },
      ],
      key: 'type',
      onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (operation) => {
        async function onClick() {
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

  useEffect(() => {
    getAllOperations()
  }, [])

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  const handleDelete = (operation) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this operation?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        deleteOperation(operation.id)
      },
    })
  }

  // const handleEdit = (operation) => {
  //   Modal.confirm({
  //     title: 'Are you sure, you want to delete this operation?',
  //     okText: 'Yes',
  //     okType: 'danger',
  //     onOk: () => {
  //       deleteOperation(operation.id)
  //     },
  //   })
  // }

  return (
    <Wrapper>
      <Table
        dataSource={operations}
        columns={columns}
        pagination={false}
        onChange={onChange}
        loading={isLoading}
      />
      <ButtonWrapper>
        <Button>Add new Operation</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default HomeTable
