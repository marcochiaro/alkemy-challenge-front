import { Button, Form, Input } from 'antd'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: flex;
  width: 100%;

  .ant-form {
    display: flex;
    align-items: center;
    width: 100%;

    .ant-row:first-of-type {
      width: 100%;
    }
  }
`
const AddressInput = () => {
  return (
    <FormWrapper>
      <Form>
        <Form.Item
          name="address"
          validateTrigger="onSubmit"
          rules={[
            {
              required: true,
              message: 'Please enter an address',
            },
          ]}
        >
          <Input placeholder="Insert a valid address" />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginLeft: 20 }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            Search
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
}

export default AddressInput
