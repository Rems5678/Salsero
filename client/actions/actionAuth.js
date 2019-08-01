import * as actionTypes from './actionTypes';

export const isAuthenticated = (payload) => ({
  type: actionTypes.IS_AUTHENTICATED,
  payload,
})

export const hasAccount = (payload) => ({
  type: actionTypes.HAS_ACCOUNT,
  payload,
})

export const isLoggedIn = (payload) => {
  type: actionTypes.IS_LOGGED_IN,
  payload
}