import {SAVE_USER_INFO} from '../action_types'
export const createSaveUserInfoAction=(value)=>{
    //存储数据在本地，关机不失效
    localStorage.setItem('user',JSON.stringify(value.user))    
    localStorage.setItem('token',JSON.stringify(value.user))    
    localStorage.setItem('isLogin',true)    
    return {type:'SAVE_USER_INFO',date:value}
}
