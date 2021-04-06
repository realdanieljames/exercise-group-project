import React from 'react'
import jwt_decode from "jwt-decode";
import './NavBar.css'
import {withRouter} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {




    let decoded = jwt_decode(window.localStorage.getItem("jwtToken"))

    const goToMainPage = () =>{

        window.localStorage.removeItem("jwtToken")

        props.history.push('/')

    }   
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              Exercise and Food Summary
          </Typography>
          
          <Button  color="inherit" >{decoded.email}</Button>
          <Button color="inherit" onClick={goToMainPage} >Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar)



 

//     return (
//         <div className="alignment" >
//             
//             <p className='logout' onClick={goToMainPage} > Logout</p>
            
//         </div>
//     )
// }

// export default withRouter(NavBar)
