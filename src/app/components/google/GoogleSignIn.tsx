'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const getGoogleLoginURL = 'https://localhost:3001/api/v1/auth/custom/google?returnTo=http://localhost:3000'
const getUserByGoogle = 'https://localhost:3001/api/v1/auth/custom/login/google'

export const GoogleSignIn: React.FC = () => {
  const { data: session } = useSession()

  const { user, accessToken } = session ?? {}

  useEffect(() => {
    console.log({ user, accessToken })
    if (user?.email) {
      const fetchUserData = async () => {
        try {
          const res = await fetch(getUserByGoogle, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`
            }
          })
          const json = await res.json()
          console.log(json)
        } catch (e) {
          console.error(e)
        }
      }

      fetchUserData()
    }
  }, [user?.email])

  console.log({ session })

  return (
    <>
      <a href={getGoogleLoginURL}>
        Sign In with Google
      </a>
      {session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      )}
    </>

  )
}
