'use client'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/login/apple'

const fetchAppleLogin = async () => {
  const myHeaders = new Headers();

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };

  try {
    const response = await fetch(getAppleLoginURL, requestOptions);
    const result = await response.text();
    console.log(result)
    return result
  } catch (error) {
    console.error(error);
  }
}

export const AppleSignIn: React.FC = () => {
  const handleAppleAuth = async () => {
    fetchAppleLogin()
  }

  return (
    <>
      <button
        onClick={handleAppleAuth}
      >
        Apple auth
      </button>
      <a href={getAppleLoginURL}>
        Apple auth
      </a>
    </>
  )
}
