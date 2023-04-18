import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Container=({title,children})=> {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title}</title>
      </Head>
        <Navbar/>
      <main className='h-full'>
        {children}
      </main>
    </>
  )
}

export default Container