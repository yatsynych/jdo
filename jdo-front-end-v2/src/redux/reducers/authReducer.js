
import {SIGNUP_USER, SIGNIN_USER} from '../actionsTypes'

const initialState = {
  login: false,
  form: {email: '', password: '', firstName: '', lastName: ''}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, form: action.payload.form }
        case SIGNIN_USER:
            return { ...state, form: action.payload.form }
        default: return state
    }
}