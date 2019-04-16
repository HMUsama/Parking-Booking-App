import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutAd} from '../../../store/actions/authActionAd' 



const AdSignedInLinks = (props) => {
    // console.log("StdSignedInLinks",props)
    return(
     <ul className="right">
        <li><NavLink to='/parking'>User Details </NavLink></li>
        <li><NavLink to='/selectArea'>Feedback </NavLink></li>
        <li><NavLink to='/'><a onClick={props.signOutAd}>LogOut </a></NavLink></li>
     </ul>
    )
}


const mapDispatchToProps =(dispatch)=>{
    return {
        signOutAd: () =>dispatch(signOutAd())
    }
}

export default connect(null,mapDispatchToProps)(AdSignedInLinks);