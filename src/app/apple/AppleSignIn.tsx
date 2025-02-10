'use client'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/login/apple'

export const AppleSignIn: React.FC = () => {

  return (
    <a href={getAppleLoginURL}>
      Apple auth
    </a>
  )
}
