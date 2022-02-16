import {
  SIGNUP_USER,
  SIGNIN_USER,
  LOGIN_USER_STATUS
} from './authActionsTypes'

const initialState = {
  isLoggedIn: true,
  formSingUp: {email: '', password: '', firstName: '', lastName: ''},
  formSingIn: {email: '', password: ''}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, formSingUp: action.payload.formSingUp }
    case SIGNIN_USER:
      return { ...state, formSingIn: action.payload.formSingIn }
    case LOGIN_USER_STATUS:
      return { ...state, isLoggedIn: action.payload.isLoggedIn }
    default: return state
  }
}