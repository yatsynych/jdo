import {SHOW_ALERT, HIDE_ALERT, SIGNUP_USER, SIGNIN_USER, SHOW_LOADER, HIDE_LOADER} from './actionsTypes'

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function authSignUp(form) {
  return dispatch => {
    dispatch({
      type: SIGNUP_USER,
      payload: form
    })
  }
}


export function authSignIn(form) {
  return {
    type: SIGNIN_USER,
    payload: form
  }
}


export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}
