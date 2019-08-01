import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Authenticate from './Auth/Authenticate.jsx';


const Navbar = () => {
  const dispatch = useDispatch();
  return (  
    <AppBar position = 'static'>
      <Toolbar>
      <Grid 
      container 
      direction = 'row' 
      alignItems = 'center' 
      justify = 'space-between'>
        <Grid item>
          <img 
          className = 'toolbar-img' 
          src = 'https://msdvletsdance.nl/wp-content/uploads/2018/10/Logo-Original-no-background.bmp.png'/>
        </Grid>
        <Grid item>
          <Typography 
          align = 'center' 
          variant = 'h2'>Salsero</Typography>
        </Grid>
        <Grid item>
          <Button 
          variant = 'outlined'
          >Sign Up</Button>
          <Button
          >Login</Button>
        </Grid>
      </Grid>
        
        
      </Toolbar>
    </AppBar>
  );
}
 
export default Navbar;