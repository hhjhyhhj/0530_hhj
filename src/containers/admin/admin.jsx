import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createDeleteUserInfo} from '../../redux/action_creators/login_action'
import {reqCategoryList} from '../../api/index'
// import {  } from "antd";
import left from './left-nav/left-nav'

 class Admin extends Component{
   //退出登录的回调
   logout=()=>{
      //触发redux删除所保存的用户信息
      this.props.deleteUserInfo()
   }

//在render中，若想实现跳转，最好用redirect
    render(){
      L
      const {user,token,isLogin}=this.props.userInfo
      if(!isLogin){
        this.props.history.replace('/login')
        return <Redirect to='/login'/>
      }else{
        return(
         <div>
            <div>hhj</div>
            <button onClick={this.logout}>退出登录</button>
         </div>
        )
      }
    }
  };

  
  export default connect(state =>{userInfo:state.userInf},
     ()=>{deleteUserInfo:createUserInfoAction}
  )(Admin)