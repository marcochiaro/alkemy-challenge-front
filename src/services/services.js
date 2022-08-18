import axios from 'axios'
const URL = 'http://localhost:3001/operations'

export const getOperations = async () => axios.get(URL)
export const deleteOperation = async (id) =>
  axios.delete(`http://localhost:3001/operations/${id}`)
