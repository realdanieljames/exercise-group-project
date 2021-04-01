import React, {createRef} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import "./Login.css"
const Login = (props) => {

    const userNameRef = createRef()
    const passwordRef = createRef()

    const switchToRegisterPage = () => {
        props.history.push("/register")
    }
console.log(props);
    return (
        <div>

            <p>Login Page</p>
            <input type='email'ref={userNameRef} placeholder="Email"/> <br></br>
            <input type='Password' ref={passwordRef} placeholder="Password" /><br></br>
            <button>Submit</button>
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
