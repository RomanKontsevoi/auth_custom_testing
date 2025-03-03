'use client'
import { imagesPrefix } from 'app/consts'
import Image from 'next/image'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/apple&returnTo=http://localhost:3000'

interface IAppleleSignInProps {
  className?: string
}

export const AppleSignIn: React.FC<IAppleleSignInProps> = ({
  className,
}) => {

  return (
    <a className={className} href={getAppleLoginURL}>
      <Image
        width={24}
        height={24}
        src={`${imagesPrefix}AppleLogo.png`}
        alt="Sign In with Apple"
      />
    </a>
  )
}
