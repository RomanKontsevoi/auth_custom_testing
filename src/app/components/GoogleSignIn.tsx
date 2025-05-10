'use client'
import { imagesPrefix } from 'app/consts'
import Image from 'next/image'
import React from 'react'

interface IGoogleSignInProps {
  className?: string
  onClickAction: () => void
}

export const GoogleSignIn: React.FC<IGoogleSignInProps> = ({
  className,
  onClickAction
}) => {
  return (
    <button className={className} onClick={onClickAction}>
      <Image
        width={24}
        height={24}
        src={`${imagesPrefix}Google.svg`}
        alt="Sign In with Google"
      />
    </button>
  )
}
