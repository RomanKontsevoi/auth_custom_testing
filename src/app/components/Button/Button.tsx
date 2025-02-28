import { Loader } from 'app/components/Loader'
import s from './Button.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  theme?: 'primary' | 'secondary'
  mode?: 'button' | 'link'
  href?: string
  onClick?: () => void
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  mode = 'button',
  href,
  onClick,
  className,
  children,
  isLoading = false,
  ...restProps
}) => {
  const internalClassName = cn(s.button, {
    [s.buttonPrimary]: theme === 'primary',
    [s.buttonSecondary]: theme === 'secondary'
  })

  if (mode === 'link') {
    if (!href) {
      return 'Provide a href to the link'
    }

    return (
      <Link
        className={cn(internalClassName, className)}
        href={href}
        {...restProps as React.HTMLProps<HTMLAnchorElement>}
      >
        {children}
      </Link>)
  }

  return (
    <button
      className={cn(internalClassName, className)}
      onClick={onClick}
      {...restProps as DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>}
    >
      {isLoading ? <Loader className={s.buttonLoader} /> : children}
    </button>
  )
}
