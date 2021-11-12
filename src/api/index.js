//项目中所有的请求接口都在API
import myAxios from './myAxios'
//引入可以转换json格式的插件
import qs from 'querystring'

import {BASE_URL} from '../config/index'
//登陆请求 加上const是为了防止别人修改
export const myAxios=(username,password)=>axios.post(`${BASE_URL}/login`,(username,password))
//发起商品分类列表
export const reqCategoryList=(username,password)=>axios.post(`${BASE_URL}/manage/category/list`)
//获取天气信息（百度接口）
export const reqWeather=()=>axios.get(`${BASE_URL}/manage/category/list`)
