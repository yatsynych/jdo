import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR
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

    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        formAlert: {text: action.payload.message, severity: 'success'}
      }

      case SIGNIN_USER_ERROR:
        return {
          ...state,
          isLoggedIn: false,
          formAlert: action.payload.formAlert
        }

    default: return state
  }

}