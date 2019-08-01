import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Grid} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {Button} from '@material-ui/core';

const Login = () => {
  const useDispatch = useDispatch();
  return (<Card>
            <Grid container>
              <TextField label = 'Username'></TextField>
              <TextField label = 'Password'></TextField>
              <Button onClick = {() => useDispatch()}>Submit</Button>
            </Grid>
          </Card>);
}
 
export default Login;