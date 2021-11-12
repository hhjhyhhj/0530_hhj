import {TEST2,TEST1} from '../action_types'
let initState='hello'
export default function text(preState=initState,action){
    const {type,data}=action
    let newState
    switch(type){
        case TEST1:
            newState=preState+data
            return newState
        case TEST2:
            newState=preState+data+'!'
            return newState
        default:
            return preState
    }
     
      


}