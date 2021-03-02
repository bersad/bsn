import axios from 'axios'


  const instance = axios.create({
  baseURL:'https://ariaeestore.com/shop/api/v1'
})
 
//  instance.defaults.headers.common['SOMETHING'] = 'something'
window.axios = require('axios') 

 window.axios.defaults.headers.common["Authorization"] = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYxNDYwNzIxMCwiZXhwIjoxNjE1MjEyMDEwfQ.WAqQs5ttoDV2yGzJzq4YC-hGFtuqOz4rJSwolO88Fpo"  
 //axios.defaults.headers.get['Authorization'] =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYwODU0MTYyNCwiZXhwIjoxNjA5MTQ2NDI0fQ.gAfWsPjqxQYZPzN2lRhlkxmEdzO9FbiSz4Bf80EsjN0";
 export default instance