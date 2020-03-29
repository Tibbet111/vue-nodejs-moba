import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL:'http://localhost:3000/admin/api'
})
//请求
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    //传请求头token授权信息
    if(localStorage.token){
        config.headers.Authorization = 'Bearer ' + (localStorage.token || '')
}
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//响应
http.interceptors.response.use(res=>{
    return res
},err=>{
    //若有错误信息显示
    if(err.response.data.message){
        Vue.prototype.$message({
        type:'error',
        message:err.response.data.message
    })
    //若错误码401判断为未登录，跳转登录页
    if(err.response.status === 401){
    router.push('/login')
    }
}
    return Promise.reject(err)
})

export default http