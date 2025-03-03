'use client'
import { AuthProvider, imagesPrefix } from 'app/consts'
import { fetchUserDataByGoogleCreds } from 'app/services/auth'
import { Tokens, useAuthStore } from 'app/store'
import { Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface IGoogleSignInProps {
  className?: string
}

export const GoogleSignIn: React.FC<IGoogleSignInProps> = ({
  className
}) => {
  const { data: session } = useSession()
  const setTokens = useAuthStore((state) => state.setTokens)
  const accessToken = useAuthStore((state) => state.accessToken)

  const { user, accessToken: googleAccessToken, provider } = session as Session ?? {}

  useEffect(() => {
    if (provider === AuthProvider.Google && googleAccessToken && !accessToken) {
      const getAndSaveUserData = async () => {
        const tokens: Tokens = await fetchUserDataByGoogleCreds(googleAccessToken)

        setTokens(tokens)
      }

      getAndSaveUserData()
    }
  }, [user?.email, googleAccessToken, setTokens, accessToken, provider])

  const handleLoginButtonClick = async () => {
    if (session) {
      await signOut()
    }

    await signIn(AuthProvider.Google)
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
