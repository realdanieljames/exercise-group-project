import React, {createRef,useState}  from 'react'
import {withRouter} from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'
import "./Register.css"
import Avatar from '@material-ui/core/Avatar';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
        </Link>{' '}
        {new Date().getFullYear()}
        {' Copyright © The Real Daniel James & Ruben Rod'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const Register = (props) => {

    const classes = useStyles()
    const userNameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const [emailError, setEmailError] = useState(false)

   
const handleSubmit = async (e) => {
    e.preventDefault()
    if(!validator.isEmail(emailRef.current.value)){
        setEmailError(true)
        return
    }else {
        setEmailError(false)
    }

    try {
        console.log('hello');
        
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



        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Calories Tracker
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)} className={classes.form} noValidate>
          <TextField
              onChange={() => setEmailError(false)}
              inputRef={userNameRef}
              variant="outlined"
              margin="normal"
              fullWidth
              id=""
              label="User Name"
              
            />
            <TextField
              onChange={() => setEmailError(false)}
              inputRef={emailRef}
              variant="outlined"
              margin="normal"
            
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
        
            />
            <TextField
              onChange={() => setEmailError(false)} 
              inputRef={passwordRef}
              variant="outlined"
              margin="normal"
             
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
                Sign up
            </Button>
            {emailError? <div>Incorrect information</div>: null}
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/" variant="body2">
                  {"Already have an account? Login here"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
    //     <div>

    //     <p>Register</p>
    //     <input type='username'ref={userNameRef} placeholder="User name"/> <br></br>
    //     <input type='email' ref={emailRef} placeholder="Email" /><br></br>
    //     <input type='password' ref={passwordRef} placeholder="Password" /><br></br>
    //     <button onClick={handleSubmit} >Submit</button>
    //     {emailError ? <div>Please input a correct email.</div>: null}
    //     <p>Already Registered? Login <span style={{color: "blue"}} onClick={switchToLoginPage} className='register-click'>here</span>.</p>
    // </div>
    // )
}




export default withRouter(Register)


    