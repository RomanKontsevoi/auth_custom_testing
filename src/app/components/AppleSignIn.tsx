'use client'
import { AuthProvider, imagesPrefix } from 'app/consts'
import { useAuthStore } from 'app/store'
import { Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

interface IAppleleSignInProps {
  className?: string
}

export const AppleSignIn: React.FC<IAppleleSignInProps> = ({
  className,
}) => {
  const { data: session } = useSession()
  const accessToken = useAuthStore((state) => state.accessToken)

  const { user, accessToken: appleAccessToken, provider } = session as Session ?? {}

  if (provider === AuthProvider.Apple) {
    console.log({ user, appleAccessToken, accessToken })
  }

  const handleLoginButtonClick = async () => {
    if (session) {
      await signOut()
    }

    await signIn(AuthProvider.Apple)
  }

  return (
    <button className={className} onClick={handleLoginButtonClick}>
      <Image
        width={24}
        height={24}
        src={`${imagesPrefix}AppleLogo.png`}
        alt="Sign In with Apple"
      />
    </button>
  )
}
