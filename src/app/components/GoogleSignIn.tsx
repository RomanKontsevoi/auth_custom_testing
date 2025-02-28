'use client'
import { imagesPrefix } from 'app/consts'
import { fetchUserDataByGoogleCreds } from 'app/services/auth'
import { Tokens, useAuthStore } from 'app/store'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface IGoogleSignInProps {
  className?: string
}

interface IGoogleSessionUser {
  name: string
  email: string
  image: string
}

interface IGoogleSession {
  user: IGoogleSessionUser,
  expires: string
  accessToken: string
}

export const GoogleSignIn: React.FC<IGoogleSignInProps> = ({
  className
}) => {
  const { data: session } = useSession()
  const setTokens = useAuthStore((state) => state.setTokens)
  const accessToken = useAuthStore((state) => state.accessToken)

  const { user, accessToken: googleAccessToken } = session as IGoogleSession ?? {}

  console.log({ user, accessToken })

  useEffect(() => {
    if (user?.email) {
      const getAndSaveUserData = async () => {
        const tokens: Tokens = await fetchUserDataByGoogleCreds(googleAccessToken)

        setTokens(tokens)
      }

      getAndSaveUserData()
    }
  }, [user?.email, googleAccessToken, setTokens])

  const handleLoginButtonClick = async () => {
    if (session) {
      await signOut()
    }

    await signIn('google')
  }

  return (
    <button className={className} onClick={handleLoginButtonClick}>
      <Image
        width={24}
        height={24}
        src={`${imagesPrefix}Google.svg`}
        alt="Sign In with Google"
      />
    </button>
  )
}
