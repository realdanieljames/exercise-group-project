import React, {Component, createRef, useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios'

import "./Login.css"
const Login = (props) => {


    useEffect(() => {

        if(window.localStorage.getItem('jwtToken')){


            setTimeout(alert("logging in as user"),3000)
            props.history.push("/main-page")
        }

        
    })
    
    
    

    const emailRef = createRef()
    const passwordRef = createRef()

    const [errorMessage, setErrorMessage] = useState(false)

    const switchToRegisterPage = () => {
        props.history.push("/register")
    }

    const handleSubmit = async () => {



        try {
            let success = await axios.post("http://localhost:3001/api/users/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })

            console.log(success.data.token);
            window.localStorage.setItem("jwtToken", success.data.token)
            props.history.push('/main-page')
        } catch (error) {

            console.log(error);
            setErrorMessage(true)
        } 

    }

console.log(props);
    return (
        <div>

            <p>Login Page</p>
            <input onChange={() => setErrorMessage(false)} type='email'ref={emailRef} placeholder="Email"/> <br></br>
            <input onChange={() => setErrorMessage(false)} type='Password' ref={passwordRef} placeholder="Password" /><br></br>
           {errorMessage? <div>Incorrect information</div>: null}
            <button onClick={handleSubmit}>Submit</button>
            <p>Not Registered? Sign up <span onClick={switchToRegisterPage} className='register-click'>here</span></p>
        </div>
    )
}







export default withRouter(Login)
