const dummyUser = {
  nickname: '조르바',
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {}
}

export const initialState = {
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: '', // 로그인 실패 사유
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null, // 내 정보
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null, // 남의 정보
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const loginAction = {
  type: LOG_IN_REQUEST,
  data: {
    nickname: '조르바'
  }
}

export const logoutAction = {
  type: LOG_OUT_REQUEST
}

export const signupAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        isLoading: true
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        isLoading: false
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        me: null
      }
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer