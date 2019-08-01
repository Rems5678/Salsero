import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {Grid} from '@material-ui/core';
// import {TextField} from '@material-ui/core';
// import {Card} from '@material-ui/core';

import Dashboard from '../dashboard/Dashboard.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const Authenticate = () => {
  const authenticated = useSelector(state => state.auth);
  const hasAccount = authenticated.hasAccount ? <Login></Login> : <Signup></Signup>
  return (<div>
          {authenticated.isAuthenticated ? 
        <Dashboard></Dashboard> : 
        hasAccount}
        </div>
    
  );
}
 
export default Authenticate;