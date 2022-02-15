import {takeEvery, put, call} from 'redux-saga/effects'
import {SIGNIN_USER} from './auth/authActionsTypes'


export default function* rootSaga() {
  yield takeEvery(SIGNIN_USER, sagaWorker)
  return
}

function* sagaWorker() {
  try {
    yield sagaWorkerSignupUser()
  } catch (e) {
    console.log(e)
  }
  return
}

async function sagaWorkerSignupUser() {
  return
}