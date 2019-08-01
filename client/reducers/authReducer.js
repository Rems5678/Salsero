import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  hasAccount: false,
  isLoggedIn: false
}

const isAuthenticated = (isAuth) => {
  return {...initialState, isAuthenticated: isAuth};
}
const hasAccount = (acc) => {
  return {...initialState, hasAccount: acc};
}
const isLoggedIn = (loggedIn) => {
  return {...initialState, isLoggedIn: loggedIn}
}
export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case(actionTypes.IS_AUTHENTICATED):
      return isAuthenticated(action.payload);
    case(actionTypes.HAS_ACCOUNT):
      return hasAccount(action.payload);
    case(actionTypes.IS_LOGGED_IN):
      return isLoggedIn(action.payload);
    default:
      return {...state};
  }
}