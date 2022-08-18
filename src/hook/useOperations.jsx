/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react'

import {
  createOperation,
  deleteOperation,
  getOperations,
} from '../services/services'

const useOperations = () => {
  const [operations, setOperations] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const balance = useMemo(() => {
    let totalBalance = 0
    operations.map((op) => {
      if (op.type === 'ENTRY') {
        totalBalance += op.amount
      } else {
        totalBalance -= op.amount
      }
    })
    return totalBalance
  }, [operations])

  const getAllOperations = async () => {
    try {
      setIsLoading(true)
      const response = await getOperations()
      if (response) {
        setOperations(response.data.data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteOperationById = async (id) => {
    try {
      setIsLoading(true)
      const response = await deleteOperation(id)
      if (response) {
        setOperations(operations.filter((op) => op.id !== id))
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const createNewOperation = async (operation) => {
    try {
      const response = await createOperation(operation)
      if (response) {
        console.log('>Op', operations)
        console.log(response.data.data)
        console.log([...operations, response.data.data])
        setOperations([...operations, response.data.data])
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    operations,
    isLoading,
    balance,
    getAllOperations,
    deleteOperationById,
    createNewOperation,
  }
}

export default useOperations
