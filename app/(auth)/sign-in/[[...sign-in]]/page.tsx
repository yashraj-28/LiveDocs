import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  console.log('sign in page');
  return (
    <main className='auth-page'>
        <SignIn/>
    </main>
  )
}

export default SignInPage
