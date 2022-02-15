import {
  SHOW_ALERT,
  SHOW_LOADER,
  HIDE_ALERT,
  HIDE_LOADER,
} from './appActionsTypes'

const initialState = {
  loading: false,
  alert: 'test'
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {...state, alert: null}
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
      default: return state
  }
}
