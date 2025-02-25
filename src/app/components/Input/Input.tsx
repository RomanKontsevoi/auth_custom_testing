import { PhoneInput } from 'app/components/Input/PhoneInput'
import cn from 'classnames'
import React from 'react'
import s from './Input.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name?: string
  wrapperClassName?: string
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  wrapperClassName = '',
  className = '',
  ref,
  ...restProps
}) => {
  console.log({ type, wrapperClassName, restProps })

  return (
    <div className={cn(s.inputWrapper, wrapperClassName)}>
      {type === 'tel' ? (
        <PhoneInput
          className={cn(s.input, className)}
          ref={ref}
          type={type}
          {...restProps}
        />
      ) : (
        <input
          className={cn(s.input, className)}
          ref={ref}
          type={type}
          {...restProps}
        />
      )}
    </div>
  )
}
