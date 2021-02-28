const dummyUser = {
  nickname: '조르바',
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {}
}

export const initialState = {
  isLoggedIn: false,
  user: null
}

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const SIGN_UP = 'SIGN_UP'

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: '조르바'
  }
}

export const logoutAction = {
  type: LOG_OUT
}

export const signupAction = (data) => {
  return {
    type: SIGN_UP,
    data
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    case SIGN_UP: {
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