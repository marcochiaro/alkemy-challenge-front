import axios from 'axios'
const URL = 'http://localhost:3001/operations'

export const getOperations = async () => axios.get(URL)
export const createOperation = async (operation) => axios.post(URL, operation)
export const getOperationById = async (id) =>
  axios.get(`http://localhost:3001/operations/${id}`)
export const deleteOperation = async (id) =>
  axios.delete(`http://localhost:3001/operations/${id}`)
