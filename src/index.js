import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
//引入顶级组件
import {Provider} from 'react-redux'
//导入路由器,最后一层
import {BrowserRouter} from 'react-router-dom'
//引入store核心对象
import store from './redux/store'
ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>
  ,document.getElementById('root')
);
