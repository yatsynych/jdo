import {takeEvery, put, call} from 'redux-saga/effects'
import {SIGNUP_USER} from './actionsTypes'
//import {showAlert} from './actions'
import HttpRequest from '../components/HttpRequest'

export function* rootSagaWatcher() {
  //yield takeEvery(SIGNUP_USER, sagaWorker)
  return
}

function* sagaWorker() {
  try {
    //yield put(showLoader())
    //const payload = yield call(sagaWorkerSignupUser)
    //yield put({ type: SIGNUP_USER, payload })
    //yield put(hideLoader())
  } catch (e) {
    //yield put(showAlert('Error !'))
    //yield put(hideLoader())
    console.log(e)
  }
}

async function sagaWorkerSignupUser(form) {
  console.log('form', form)
  //const HttpRequestObj = new HttpRequest('/api/auth/signup', 'POST', {...form})
  //const response = HttpRequestObj.request()
  //console.log(response.json)
  //return await response.json()
  return
}