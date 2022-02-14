
import {CREATE_TODO, FETCH_TODOS} from '../actionsTypes'

const initialState = {
  todos: [],
  fetchedTodos: []
}

// Pure Functions
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, posts: state.posts.concat([action.payload]) }
    case FETCH_TODOS:
      return { ...state, fetchedPosts: action.payload }
    default: return state
  }
}