import React,{Component} from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'
import logo from './images/logo.png'
import { addTslintLoader } from 'customize-cra';
import {connect} from 'react-redux'
import {createdemo1Action,createdemo2Action} from '../../redux/action_creators/test_action'
let {Item}=Form

 class Login extends Component{
  handleSubmit=(event)=>{
    event.preventDefault();//阻止浏览器默认行为--禁止form表单提交 ---通过ajax发送请求s
    this.props.form.validatorFields((err,values)=>{
      if(!err){
        //alter( 向服务器发送请求)
        this.props.demo2('0719')

      }else{
        message.error('表单输入有错误，请检查')
      }
    })
}
  //密码的自定义验证  每当在密码输入框输入东西的时候，都会调用此函数取验证是否合法 自定义校验，自己判断
  pwdvalidator=(rule,value,callback)=>{
    if(!value){
      //密码输入不能为空
      callback('密码输入不能为空')
    }else if(value.length<4){
      //密码的长度不能小于等于4位
      callback('密码的长度不能小于等于4位')
    }else if(value.length>12){
      //密码的长度不能大于等于12位
      callback('密码的长度不能大于等于12位')
    }else if(!(/^\w+$/).test(value)){
      //密码必须为数字字母下划线
      callback('密码的长度必须为数字字母下划线')
    }else{
      callback()
    }
  }
    render(){
      return(
        <div className='login'>
          <header>
              <img src={logo} alt="logo" />
              <h1 >商品管理系统</h1>
          </header>
          <select name="" id="">
              <h1>用户登录</h1>
             <Form onSubmit={this.handleSubmit}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}>
              <Item
              name="用户名"
                /*
              用户名/密码的的合法性要求
                1). 必须输入
                2). 必须大于等于4位
                3). 必须小于等于12位
                4). 必须是英文、数字或下划线组成
               */
                rules={[
                  { required: true, message: '用户名必须输入' },//必须输入
                  { max:12, message: '用户名必须小于等于12位' },
                  { min:12, message: '用户名必须大于等于12位' },
                  { patten:/^\w+$/, message: '用户名必须是英文、数字或下划线组成' },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Item>
              <Item
                name="password"
                //密码验证
                rules={[{ validator:this.pwdvalidator}]}
              >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码"
                />
              </Item>
              <Item>
                <Item name="remember" valuePropName="checked" noStyle>
                </Item>
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登陆
                </Button>
              </Item>
              </Form>
          </select>
        </div>
      )
    }
  }
 
  export default connect(
  state=> ({test:state.test}),
  {
    demo1:createdemo1Action,
    demo2:createdemo2Action
  }
)(Form.create()(Login))
/*
严重暴露
1.暴露的根本不是我们定义的login组件，而是经过加工（包装）的login组件
2.form.creat()调用一个返回函数，该函数加工了login组件，生成了一个新组件，新组件实例对象的props多了ige
强大的form属性，能完成验证
3.我们暴露出去的不在是login，而是通过login生成的一个新组件

*/ 

//高阶函数：如果一个函数接收一个函数作为参数，或者一个函数调用的返回值是一个函数----高阶函数
//组件的本质-----函数

