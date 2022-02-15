import { combineReducers } from 'redux'
import { appReducer } from './app/appReducer'
import { authReducer } from './auth/authReducer'
import { todosReducer } from './todo/todoReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  todos: todosReducer
})