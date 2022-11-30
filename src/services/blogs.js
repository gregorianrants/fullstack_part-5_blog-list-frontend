import axios from 'axios'
const baseUrl = '/api/blogs'

let authHeader = null

const setToken = (token)=>{
  authHeader = {Authorization: `bearer ${token}`}
}

const getAll = () => {
  const config = {
    headers: authHeader
  }
  const request = axios.get(baseUrl,config)
  return request.then(response => response.data)
}

export default { getAll,setToken }