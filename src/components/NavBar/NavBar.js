import React, {useEffect} from 'react'
import jwt_decode from "jwt-decode";
import './NavBar.css'
import {withRouter} from 'react-router-dom'


const NavBar = (props) => {

    let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))

    const goToMainPage = () =>{

        window.localStorage.removeItem("jwtToken")

        props.history.push('/')

    }   

 

    return (
        <div className="alignment" >
            {decoded.email}
            <p className='logout' onClick={goToMainPage} > Logout</p>
            
        </div>
    )
}

export default withRouter(NavBar)
