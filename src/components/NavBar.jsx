import React from 'react'
import {
    NavLink
} from "react-router-dom";

const NavBar=()=>{
    return(
        <div>
        <h1>home</h1>
        <div className="container_nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/batman">Batman</NavLink></li>
                <li><NavLink to="/superman">Superman</NavLink></li>
                <li><NavLink to="/daredevil">Daredevil</NavLink></li>
            </ul>
        
        </div>
        
    </div>
    )
    
}
export default NavBar