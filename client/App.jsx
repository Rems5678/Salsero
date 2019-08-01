import React from 'react';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import EventsWrapper from './wrappers/EventsWrapper.jsx';
import Navbar from './components/Navbar.jsx';
const App = () => {
  return (
    <div className = 'App'>
    <Grid 
    container 
    direction = 'row' 
    alignContent = 'flex-end'
    justify = 'flex-end'
    >
     <Navbar></Navbar>
      <Grid item xs = {12}>
        <Typography 
        align = 'center' 
        variant = 'h3'
        className = 'main-header'> Salsa Events in LA</Typography> 
      </Grid>
      <Grid item xs = {12}>
       <EventsWrapper ></EventsWrapper>
      </Grid>
    </Grid>

    </div>
    
  );
}
 
export default App;