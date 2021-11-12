import { message } from 'antd'
import axios from 'axios'
import qs from 'querystring'
import NProgress from 'nprogress'
import 'nprogress/nprogress'
import store from '../redux/store'
import {createDeleteUserInfoAction} from '../redux/action_creators/login_action.js'
const instance =axios.create({
    timeout:4000 //超时
})
//请求拦截器
instance.interceptors.request.use((config)=> {
    NProgress.start()
    const {method,data} = config
    //若是post请求
    if(method.toLocaleLowerCase()==='post'){
        //若传递过来的参数是对象
        if(data instanceof Object){
            config.data=qs.stringify(data)
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error);
})
//响应拦截器
instance.interceptors.response.use(
    
    (response)=> {
    //请求若成功，走这里
    NProgress.done()
    return response.data;
},(error)=>{
    NProgress.done()
    if(error.response.status===401){
        message.error('身份验证失败，请重新登陆',1)
        // this.props.deleteUserInfo
        //分发一个删除用户信息的操作
        this.props.deleteUserInfo()
        store.dispatch(createDeleteUserInfoAction)
    }else{
        //直接返回一个失败的promise实例，请求若失败，走这
        message.error(error.message,1)
    }
    return new Promise(()=>{});
})


export default axios