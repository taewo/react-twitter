import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import AppLayout from '../components/AppLayout'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const Main = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.min.css" integrity="sha512-YDGC3dGTmRxmuvRf5gL2FcLir57pCKJMETYXydRCchEXtmhN59qZnxyoLdBVTQM8yrlcbgCRNeMbM39zM/LJxQ==" crossorigin="anonymous" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  )
}

Main.propTypes = {
  Component: PropTypes.elementType
}

export default withRedux((initialState, options) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : compose(
    applyMiddleware(...middlewares),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  )
  const store = createStore(rootReducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
})(Main)