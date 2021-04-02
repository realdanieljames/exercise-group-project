import React, {createRef, useState} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import validator from 'validator';

import "./Login.css"
const Login = (props) => {

    const userNameRef = createRef()
    const passwordRef = createRef()

    const [emailError, setEmailError] = useState(false)


    const switchToRegisterPage = () => {
        props.history.push("/register")
    }

    const handleSubmit = () => {
        if(!validator.isEmail(userNameRef.current.value)){
            setEmailError(true)
            return
        }else {
            setEmailError(false)
        }
        
    }

console.log(props);
    return (
        <div>

            <p>Login Page</p>
            <input type='email'ref={userNameRef} placeholder="Email"/> <br></br>
            <input type='Password' ref={passwordRef} placeholder="Password" /><br></br>
            {emailError ? <div>Please input a correct email.</div>: null}
            <button onClick={handleSubmit}>Submit</button>
            <p>Not Registered? Sign up <span onClick={switchToRegisterPage} className='register-click'>here</span></p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        // food: state.food_Reducer.food,
        // exercise: state.exercise_Reducer.exercise,
        // calories: state.exercise_Reducer.calories
        
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
