import { takeLatest, put, call } from 'redux-saga/effects'
import {
  signUpUserSuccess,
  signUpUserError,
  signInSuccess,
  signInError
} from './authActions'
import {
  postSignUpUser,
  postSignInUser,
  setUserToLocalStorage
} from '../../helpers/backendHelper'
import {
  SIGNUP_USER,
  SIGNIN_USER
} from './authActionsTypes'

function* authRootSaga() {
  yield takeLatest(SIGNUP_USER, sagaSigUpUser)
  yield takeLatest(SIGNIN_USER, sagaSigInUser)
}

function* sagaSigUpUser({ payload: formSingUp }) {
  try {
    const response = yield call(postSignUpUser, formSingUp)
    yield put(signUpUserSuccess(response))
  } catch (error) {
    yield put(signUpUserError({text: error, severity: 'error'}))
  }
}

function* sagaSigInUser({ payload: formSingIn })
{
  try {
    const response = yield call(postSignInUser, formSingIn)
    yield call(setUserToLocalStorage, response.user)
    yield put(signInSuccess(response.message))
  } catch (error) {
    yield put(signInError({text: error, severity: 'error'}))
  }
}

export default authRootSaga