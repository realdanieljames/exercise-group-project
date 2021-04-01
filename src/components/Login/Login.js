import React, {createRef} from 'react'
import {withRouter} from 'react-router-dom'
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

export default withRouter(Login)
