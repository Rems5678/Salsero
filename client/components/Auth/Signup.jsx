import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {Button} from '@material-ui/core';


import Authenticate from './Authenticate.jsx';

const Signup = () => {
  const username = useSelector(state => state.auth.username);
  const password = useSelector(state => state.auth.password);
  const dispatch = useDispatch();

  return (<Card>
    <Grid container>
      <TextField label = 'Username'></TextField>
      <TextField label = 'Password'></TextField>
      <TextField label = 'Confirm Password'></TextField>
      <Button onClick = {() => useDispatch()}>Submit</Button>
    </Grid>
  </Card>);
}
 
export default Signup;