//最核心的状态管理者
//从redux中引入creactore，用于创建最核心的store对象
import {createStore,applyMiddleware} from 'redux'

//引入reducer
import reducers from './reducers/test_reducer'

//引入redux-thunk
import thunk from 'redux-thunk'
//引入redux-devtools-extension，用于支持redux开发者调式工具的额运行
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))