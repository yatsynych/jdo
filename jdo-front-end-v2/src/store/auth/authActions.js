import {
  SIGNUP_USER,
  SIGNIN_USER
} from './authActionsTypes'

export function authSignUp(form) {
  return {
    type: SIGNUP_USER,
    payload: form
  }
}

export function authSignIn(form) {
  return {
    type: SIGNIN_USER,
    payload: form
  }
}