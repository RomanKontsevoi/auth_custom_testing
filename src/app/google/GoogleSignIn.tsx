'use client'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/google?returnTo=http://localhost:3000'

export const GoogleSignIn: React.FC = () => {

  return (
    <a href={getAppleLoginURL}>
      Sign In with Google
    </a>
  )
}
