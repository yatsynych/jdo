import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { authReducer } from './authReducer'
import { todosReducer } from './todosReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  todos: todosReducer
})