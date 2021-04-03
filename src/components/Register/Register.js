import React, {createRef,useState}  from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import validator from 'validator'
import axios from 'axios'

const Register = (props) => {


    const userNameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const [emailError, setEmailError] = useState(false)

    const switchToLoginPage = () => {
    props.history.push("/")
}
const handleSubmit = async () => {
    if(!validator.isEmail(emailRef.current.value)){
        setEmailError(true)
        return
    }else {
        setEmailError(false)
    }

    try {
        let success = await axios.post("http://localhost:3001/api/users/register", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            username: userNameRef.current.value,
        })
        console.log(success);
         if(success.status === 200){
             alert('Success, please proceed to login.')
         }
    } catch (error) {
        console.log(error);
    }


}

    return (
        <div>

        <p>Register</p>
        <input type='username'ref={userNameRef} placeholder="User name"/> <br></br>
        <input type='email' ref={emailRef} placeholder="Email" /><br></br>
        <input type='password' ref={passwordRef} placeholder="Password" /><br></br>
        <button onClick={handleSubmit} >Submit</button>
        {emailError ? <div>Please input a correct email.</div>: null}
        <p>Already Registered? Login <span onClick={switchToLoginPage} className='register-click'>here</span>.</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))


    