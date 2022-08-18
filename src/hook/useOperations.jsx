/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

import { getOperations } from '../services/services'

const useOperations = () => {
  const [operations, setOperations] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
  // const getOperationById = async () => {
  //   try {
  //     setIsLoading(true)
  //     const response = await getOperationById()
  //     if (response) {
  //       setOperations(response.data.data)
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  return { operations, isLoading, getAllOperations }
}

export default useOperations
