//引入汇总reducers的人
import {CombinedState, combineReducers} from 'redux'
//引入汇总的成员
import testReducer from './test_reducer.js'
export default combineReducers({
    test:testReducer

})