import React, { createRef, useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
        </Link>{' '}
        {new Date().getFullYear()}
        {' Copyright © The Real Daniel James & A-Rod'}
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
  }))
 

  


const Login = (props) => {


    useEffect(() => {
        console.log('hello useeffect');
        

        if(window.localStorage.getItem('jwtToken')){


            setTimeout(alert("logging in as user"),3000)
            props.history.push("/main-page")
        }

        

        
    })
    
    const classes = useStyles();

    const emailRef = createRef()
    const passwordRef = createRef()

    const [errorMessage, setErrorMessage] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('hello');
        


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

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Calories Tracker
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form} noValidate>
        <TextField
          onChange={() => setErrorMessage(false)}
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
          onChange={() => setErrorMessage(false)} 
          inputRef={passwordRef}
          variant="outlined"
          margin="normal"
          
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
       
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        {errorMessage? <div>Incorrect information</div>: null}
        <Grid container>
          <Grid item xs>
           
          </Grid>
          <Grid item>
            <Link href="http://localhost:3000/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
  );
    
}
export default withRouter(Login)






