
import {SIGNUP_USER, SIGNIN_USER} from '../actionsTypes'

const initialState = {
  login: false,
  form_singup: {email: '', password: '', firstName: '', lastName: ''},
  form_singin: {email: '', password: ''}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            console.log(action)
            //return { ...state, form_singup: state.form_singup }
        case SIGNIN_USER:
            return { ...state, form_singin: state.form_singin }
        default: return state
    }
}