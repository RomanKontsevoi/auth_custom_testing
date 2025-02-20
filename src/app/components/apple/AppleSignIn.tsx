'use client'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/apple&returnTo=http://localhost:3000'

export const AppleSignIn: React.FC = () => {

  return (
    <a href={getAppleLoginURL}>
      Sign In with Apple
    </a>
  )
}
