'use client'

import { InputMask } from '@react-input/mask'
import React from 'react'

export const PhoneInput: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return <InputMask
    mask="+(974) __-___-___"
    replacement={{ _: /\d/ }}
    showMask
    {...props}
  />
}
