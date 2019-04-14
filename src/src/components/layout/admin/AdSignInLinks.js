import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutAd} from '../../../store/actions/authActionsAd' 

const AdSignedInLinks = (props) => {
    // console.log("std",props)
    return(
     <ul className="right">
        {/* <li><NavLink to='/dashbord'>Dashbord</NavLink></li> */}
        <li><a onClick={props.signOutAd}>Log Out</a></li>
        
        <li>
            {/* <NavLink to='/dashboardStd' 
            className="btn btn-floating black lightten-1">
            {props.profile.initails}
        </NavLink> */}
        </li>
     </ul>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        signOutAd: () =>dispatch(signOutAd())
    }
}

export default connect(null,mapDispatchToProps)(AdSignedInLinks);