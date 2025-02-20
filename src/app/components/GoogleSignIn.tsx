'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

// const getGoogleLoginURL = 'https://localhost:3001/api/v1/auth/custom/google?returnTo=http://localhost:3000'
const getUserByGoogle = 'https://localhost:3001/api/v1/auth/custom/login/google'

interface IGoogleSignInProps {
  className?: string
}

export const GoogleSignIn: React.FC<IGoogleSignInProps> = ({
  className,
}) => {
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
      {session ? (
        <button className={className} onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button className={className} onClick={() => signIn('google')}>
          <Image
            width={24}
            height={24}
            src="https://aamotorswebapp800a.blob.core.windows.net/str-b2c/Google.svg"
            alt="Sign In with Google"
          />
        </button>
      )}
    </>

  )
}
