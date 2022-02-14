import {takeEvery, put, call} from 'redux-saga/effects'
import {SIGNIN_USER} from './actionsTypes'


export function* rootSagaWatcher() {
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