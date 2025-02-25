import s from './Button.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  theme?: 'primary' | 'secondary'
  mode?: 'button' | 'link'
  href?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  mode = 'button',
  href,
  onClick,
  className,
  children
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
      >
        {children}
      </Link>)
  }

  return (
    <button
      className={cn(internalClassName, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
