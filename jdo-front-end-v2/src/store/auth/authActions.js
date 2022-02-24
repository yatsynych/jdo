import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR
} from './authActionsTypes'

export function signUpUser(formSingUp) {
  return {
    type: SIGNUP_USER,
    payload: formSingUp
  }
}

export function signUpUserSuccess(formAlert) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: {formAlert}
  }
}

export function signUpUserError(formAlert) {
  return {
    type: SIGNUP_USER_ERROR,
    payload: {formAlert}
  }
}

export function signInUser(formSingIn) {
  return {
    type: SIGNIN_USER,
    payload: formSingIn
  }
}

export function signInSuccess(message) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: {message}
  }
}

export function signInError(formAlert) {
  return {
    type: SIGNIN_USER_ERROR,
    payload: {formAlert}
  }
}