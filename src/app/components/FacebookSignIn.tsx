'use client'
import { imagesPrefix } from '@/app/consts'
import Image from 'next/image'
import React from 'react'

const getAppleLoginURL = 'https://localhost:3001/api/v1/auth/custom/apple&returnTo=http://localhost:3000'

interface IFacebookSignInProps {
  className?: string
}

export const FacebookSignIn: React.FC<IFacebookSignInProps> = ({
  className,
}) => {

  return (
    <a className={className} href={getAppleLoginURL}>
      <Image
        width={24}
        height={24}
        src={`${imagesPrefix}Facebook.svg`}
        alt="Sign In with Facebook"
      />
    </a>
  )
}
