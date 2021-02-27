import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import AppLayout from '../components/AppLayout'


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

export default Main