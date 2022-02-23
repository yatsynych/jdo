import {
  SIGNUP_USER,
  SIGNIN_USER,
  LOGIN_USER_STATUS,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR
} from './authActionsTypes'

export function authSignUp(formSingUp) {
  return {
    type: SIGNUP_USER,
    payload: formSingUp
  }
}

export function userCreateSuccess(formAlert) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: {formAlert}
  }
}

export function userCreateError(formAlert) {
  return {
    type: SIGNUP_USER_ERROR,
    payload: {formAlert}
  }
}

export function authSignIn(formSingIn) {
  return {
    type: SIGNIN_USER,
    payload: formSingIn
  }
}

export function loginSucces(formAlert) {
  return {
    type: LOGIN_USER_STATUS,
    payload: {isLoggedIn: true, formAlert}
  }
}

export function loginError(formAlert) {
  return {
    type: LOGIN_USER_STATUS,
    payload: {isLoggedIn: false, formAlert}
  }
}