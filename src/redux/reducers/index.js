//引入汇总reducers的人
import {CombinedState, combineReducers} from 'redux'
//引入汇总的成员
import loginReducer from './login_reducer.js'
export default combineReducers({
    UserInfo:loginReducer

})