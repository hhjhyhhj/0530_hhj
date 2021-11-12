import React,{Componnt} from 'react'
import {icon,button} from 'antd'
import screen from 'screenfull'
import {connect} from 'react-redux'
import './header.less'
import dayjs from 'dayjs'
import screenfull from 'screenfull'
export default class Header extends Component{
  state={
    isFull:false,
    data:dayjs().format('YYYY年 MM月DD日 HH:mm:ss')
  }
  //切换全屏按钮的回调
  fullScreen=()=>{
    screen.toggle()
  }
  componentDidMount(){
    //给screen绑定监听
    screenfull.on('change',()=>{
      let isFull=!this.state.isFull
      this.setstate({isFull})
    })
  }
  //点击退出登陆的回调
  logout
  render(){
    return(
      <header className='header'>
        <div className='header-top'>
          <Button size='small' onClick={this.fullScreen}>
             <icon type='fullscreen'/>
          </Button>    
          <span className='uesrname'>欢迎，佩奇</span>
          <Button type='link' onClick={this.logout}>退出登陆</Button>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>
          柱状图
          </div>
          <div className='header-bottom-right'>
              22222233355
              <img src="" alt="" />
              晴
          </div>
        </div>
      </header>
    )
  }
}