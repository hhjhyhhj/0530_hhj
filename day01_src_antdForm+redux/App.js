import React,{Component} from 'react'
//设置路由
import {Route,Switch} from 'react-router-dom'
import 'antd/dist/antd'
import Admin from './containers/admin/admin.jsx'
import Login from './containers/login/login.jsx'

export default class App extends Component{
  render(){
    return(
      <div className='app'>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </div>
    )
  }
}