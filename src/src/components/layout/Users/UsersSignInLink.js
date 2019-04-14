import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutStd} from '../../../store/actions/authActionUR' 


const UsersSignedInLinks = (props) => {
    // console.log("StdSignedInLinks",props)
    return(
     <ul className="right">
        <li><NavLink to='/'><a onClick={props.signOutStd}>LogOut </a></NavLink></li>
     </ul>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        signOutStd: () =>dispatch(signOutStd())
    }
}

export default connect(null,mapDispatchToProps)(UsersSignedInLinks);