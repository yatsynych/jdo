import {
  SIGNUP_USER,
  SIGNIN_USER,
  LOGIN_USER_STATUS,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
} from './authActionsTypes'

const initialState = {
  isLoggedIn: false,
  formAlert: {text: ''},
  formSingUp: {email: '', password: '', firstName: '', lastName: ''},
  formSingIn: {email: '', password: ''}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGNUP_USER:
      return {
       ...state,
       formSingUp: action.payload.formSingUp
      }

    case SIGNUP_USER_SUCCESS:
      console.log(action.payload.formAlert)
      return {
        ...state,
        formAlert: {text: action.payload.formAlert.message, severity: 'success'}
      }

    case SIGNUP_USER_ERROR:
      return {
        ...state,
        formAlert: action.payload.formAlert
      }

    case SIGNIN_USER:
      return {
        ...state,
        formSingIn: action.payload.formSingIn
      }

    case LOGIN_USER_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        formAlert: action.payload.formAlert
      }

    default: return state
  }
}