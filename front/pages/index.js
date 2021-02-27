import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.min.css" integrity="sha512-YDGC3dGTmRxmuvRf5gL2FcLir57pCKJMETYXydRCchEXtmhN59qZnxyoLdBVTQM8yrlcbgCRNeMbM39zM/LJxQ==" crossorigin="anonymous" />
      </Head>
      <AppLayout>
        <div>HEllo Next</div>
      </AppLayout>
    </>
  )
}

export default Home