import {takeLatest, put, call} from 'redux-saga/effects'
import {SIGNIN_USER, SIGNUP_USER/*, LOGIN_USER_STATUS*/} from './authActionsTypes'
import {loginUserStatus} from './authActions'
import {PostSignUpUser, PostSignInUser} from '../../helpers/backendHelper'

function* authRootSaga() {
  yield takeLatest(SIGNUP_USER, sagaSigUpUser)
  yield takeLatest(SIGNIN_USER, sagaSigInUser)
}

function* sagaSigUpUser({ payload: formSingUp }) {
  try {
    const response = yield call(PostSignUpUser, formSingUp)
  } catch (error) {
    console.log('sagaSigUpUser - error')
  }
}

function* sagaSigInUser({ payload: formSingIn })
{
  try {
    const response = yield call(PostSignInUser, formSingIn)
    console.log('sagaSigInUser', response)
    //yield put(loginUserStatus(response))
    //yield put({ type: LOGIN_USER_STATUS, payload: { isLoggedIn: true } })
  } catch (error) {
    //yield put(showAlert(error.response))
    console.log('sagaSigInUser - error')
  }
}

export default authRootSaga