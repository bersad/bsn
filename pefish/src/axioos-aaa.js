 import axios from 'axios'
axios.defaults.baseURL =  'https://jsonplaceholder.typicode.com';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYxNDI0MzM1NSwiZXhwIjoxNjE0ODQ4MTU1fQ.A2AoHBgTHJEv2Coqz43dd1o5CxRpR7D_zlfopPv1Fz8"


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  