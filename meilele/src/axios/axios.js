import axios from 'axios'

// 实例化axios
const service = axios.create({
    baseURL: '/api'
})

service.interceptors.request.use(config=>{
    return config
})

service.interceptors.response.use(res=>{
    // const result = res.data.result
    // console.log(result)
    return res.data
})

export default service