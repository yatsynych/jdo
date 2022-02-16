import {takeLatest, put, call} from 'redux-saga/effects'
import {SIGNIN_USER, SIGNUP_USER} from './authActionsTypes'
import {loginUserStatus} from './authActions'
import {postSignInUser} from '../../helpers/backendHelper'

function* authRootSaga() {
  yield takeLatest(SIGNUP_USER, sagaSigUpUser)
  yield takeLatest(SIGNIN_USER, sagaSigInUser)
}

function* sagaSigUpUser({ payload: formSingUp }) {
  console.log('sagaSigUpUser', formSingUp)

}

function* sagaSigInUser({ payload: formSingIn })
{
  try {
    const response = yield call(postSignInUser, formSingIn)
    yield put(loginUserStatus(response))
  } catch (error) {
    //yield put(showAlert(error.response))
    console.log('error')
  }
}

export default authRootSaga