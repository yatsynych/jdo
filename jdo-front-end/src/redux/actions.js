import {SHOW_ALERT, HIDE_ALERT, SIGNUP_USER, SIGNIN_USER} from './actionsTypes'

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function authSignUp(form) {
  console.log(form)
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


/*

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

*/



/*
export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
}
*/