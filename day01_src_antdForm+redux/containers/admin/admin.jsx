import React,{Component} from 'react'
import {connect} from 'react-redux'
import {createdemo1Action} from '../../redux/action_creators/test_action'
 class Admin extends Component{

    render(){
      return(
        <div>
          admin
        </div>
      )
    }
  }
  export default connect(
    state =>({peiqi:state.test}),
    {
      demo1:createdemo1Action
    }
  )(Admin)