import {
  SIGNUP_USER,
  SIGNIN_USER,
  LOGIN_USER_STATUS
} from './authActionsTypes'

export function authSignUp(formSingUp) {
  return {
    type: SIGNUP_USER,
    payload: formSingUp
  }
}

export function authSignIn(formSingIn) {
  return {
    type: SIGNIN_USER,
    payload: formSingIn
  }
}

export function loginUserStatus(isLoggedIn) {
  console.log('loginUserStatus', isLoggedIn)
  return {
    type: LOGIN_USER_STATUS,
    payload: {isLoggedIn}
  }
}