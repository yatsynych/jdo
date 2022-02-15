import {
  CREATE_TODO,
  FETCH_TODOS
} from '../todoActionsTypes'

export function createTodos(todo) {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export function fetchTodos(todos) {
  return {
    type: FETCH_TODOS,
    payload: todos
  }
}