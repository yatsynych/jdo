
import {
    SIGNUP_USER,
    SIGNIN_USER
} from './authActionsTypes'

const initialState = {
  isLoggedIn: false,
  form_singup: {email: '', password: '', firstName: '', lastName: ''},
  form_singin: {email: '', password: ''}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, form_singup: action.payload.form_singup }
        case SIGNIN_USER:
            return { ...state, form_singin: action.payload.form_singin }
        default: return state
    }
}