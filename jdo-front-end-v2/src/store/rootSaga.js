import { all, fork } from 'redux-saga/effects'
import authRootSaga from './auth/authSaga'

export default function* rootSaga() {
  yield all([fork(authRootSaga)]);
}
