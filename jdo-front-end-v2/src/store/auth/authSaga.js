import { takeLatest, put, call } from 'redux-saga/effects'
import { userCreateSuccess, userCreateError, loginSucces, loginError } from './authActions'
import { PostSignUpUser, PostSignInUser } from '../../helpers/backendHelper'
import { SIGNUP_USER, SIGNIN_USER } from './authActionsTypes'

function* authRootSaga() {
  yield takeLatest(SIGNUP_USER, sagaSigUpUser)
  yield takeLatest(SIGNIN_USER, sagaSigInUser)
}

function* sagaSigUpUser({ payload: formSingUp }) {
  try {
    const response = yield call(PostSignUpUser, formSingUp)
    yield put(userCreateSuccess(response))
  } catch (error) {
    yield put(userCreateError({text: error, severity: 'error'}))
  }
}

function* sagaSigInUser({ payload: formSingIn })
{
  try {
    const response = yield call(PostSignInUser, formSingIn)
    yield put(loginSucces(response))
  } catch (error) {
    yield put(loginError({text: error, severity: 'error'}))
  }
}

export default authRootSaga