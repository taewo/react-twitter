import axios from 'axios'
import { all, call, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { loginAction, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST } from '../reducers/user'

axios.defaults.baseURL = 'http://localhost:3065/api'

function loginAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/login', loginData, {
    withCredentials: true
  });
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data)
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data
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

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user', signUpData);
}

function* signUp(action) {  //  action에는 { type: 액션타입, data: {...} } 이러한 형태로 들어온다
  try {
    yield call(signUpAPI, action.data) //  call은 비동기처리, fork는 동기처리
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

function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/logout', {}, {
    withCredentials: true
  });
}

function* logOut() {  //  action에는 { type: 액션타입, data: {...} } 이러한 형태로 들어온다
  try {
    yield call(logOutAPI) //  call은 비동기처리, fork는 동기처리
    yield put({ // put은 dispatch 동일
      type: LOG_OUT_SUCCESS
    })
  } catch (e) {
    console.log('eeeee', e)
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    })
  }
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut)
}

function loadUserAPI() {
  // 서버에 요청을 보내는 부분
  return axios.get('/user', {
    withCredentials: true
  });
}

function* loadUser() {  //  action에는 { type: 액션타입, data: {...} } 이러한 형태로 들어온다
  try {
    const result = yield call(loadUserAPI) //  call은 비동기처리, fork는 동기처리
    yield put({ // put은 dispatch 동일
      type: LOAD_USER_SUCCESS,
      data: result.data
    })
  } catch (e) {
    console.log('eeeee', e)
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    })
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLogOut),
    fork(watchLoadUser)
  ]);
}