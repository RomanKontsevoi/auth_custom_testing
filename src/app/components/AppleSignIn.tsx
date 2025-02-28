'use client'
import { imagesPrefix } from 'app/consts'
import { useAuthStore } from 'app/store'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/apple&returnTo=http://localhost:3000'

interface IAppleleSignInProps {
  className?: string
}

export const AppleSignIn: React.FC<IAppleleSignInProps> = ({
  className,
}) => {
  const { data: session } = useSession()
  const setTokens = useAuthStore((state) => state.setTokens)
  const accessToken = useAuthStore((state) => state.accessToken)

  const { user, accessToken: appleAccessToken } = session as unknown ?? {}

  console.log({ user, appleAccessToken, accessToken })

  const handleLoginButtonClick = async () => {
    if (session) {
      await signOut()
    }

    await signIn('apple')
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
