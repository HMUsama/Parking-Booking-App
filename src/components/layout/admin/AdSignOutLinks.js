import React from 'react'
import { NavLink } from 'react-router-dom'

const AdSignedOutLinks = () => {
    return(
     <ul className="right">
         <div className="  right darken-2 ">
            <select className="btn">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Student</option>
                <option value="2">Company </option>
                <option value="3">Admin</option>
            </select>
            </div>
     </ul>
    )
}

export default AdSignedOutLinks;