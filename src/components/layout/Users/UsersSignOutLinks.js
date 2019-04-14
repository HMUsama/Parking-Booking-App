import React from 'react'
import { NavLink } from 'react-router-dom'

const UserSignedOutLinks = () => {
    return(
     <ul className="right">
         <div className="  right darken-2 ">
         <ul className="right">
                 <li><NavLink to='/usersLogIn'>User Login</NavLink></li>
                 <li><NavLink to='/adminLogIn'>Admin</NavLink></li>
        </ul>
            </div>
     </ul>
    )
}

export default UserSignedOutLinks;