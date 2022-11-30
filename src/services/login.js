import axios from "axios"

const baseUrl = '/api/login'

const login=async ({username,password})=>{
  
  const result = await axios.post(baseUrl,{username,password})
  return result.data
}

const exportsObj = {
  login
}

export default exportsObj