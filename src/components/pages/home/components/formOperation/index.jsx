import { Button, Form, Input, InputNumber, Modal, Select } from 'antd'
import { useState } from 'react'

const FormOperation = ({ createNewOperation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = (data) => {
    console.log(data)
    createNewOperation(data)
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="secondary" onClick={showModal}>
        Add a new operation
      </Button>
      <Modal
        title="Add a new operation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="concept"
            label="Concept"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Type the concept" />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <InputNumber
              addonBefore="+"
              addonAfter="$"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Select placeholde="Select the concept">
              <Select.Option value="ENTRY">Entry</Select.Option>
              <Select.Option value="OUTFLOW">Outflow</Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            OK
          </Button>
        </Form>
      </Modal>
    </>
  )
}

export default FormOperation
