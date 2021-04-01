import React, {createRef}  from 'react'
import {withRouter} from 'react-router-dom'

const Register = (props) => {


    const userNameRef = createRef()
    const passwordRef = createRef()

    const switchToLoginPage = () => {
    props.history.push("/")
}

    return (
        <div>

        <p>Register</p>
        <input type='email'ref={userNameRef} placeholder="Email"/> <br></br>
        <input type='Password' ref={passwordRef} placeholder="Password" /><br></br>
        <button>Submit</button>
        <p>Already Registered? Login <span onClick={switchToLoginPage} className='register-click'>here</span>.</p>
    </div>
    )
}

export default withRouter(Register)


    