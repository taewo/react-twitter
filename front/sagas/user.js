import axios from 'axios'
import { all, call, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { loginAction, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user'

function loginAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* login() {
  try {
    // yield call(loginAPI)
    yield delay(2000)
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS
    })
  } catch (e) {
    console.error(e)
    yield put({
      type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login)
}

function signUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* signUp() {
  try {
    yield delay(2000)
    // yield call(signUpAPI) //  call은 비동기처리, fork는 동기처리
    throw new Error('에러러러ㅓ러에러러')
    yield put({ // put은 dispatch 동일
      type: SIGN_UP_SUCCESS
    })
  } catch (e) {
    console.log('eeeee', e)
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    })
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp)
  ]);
}