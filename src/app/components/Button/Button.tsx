import s from './Button.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  type?: 'button' | 'link'
  href?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  type = 'button',
  href,
  onClick,
  children
}) => {
  const className = cn(s.button, {
    [s.buttonPrimary]: theme === 'primary',
    [s.buttonSecondary]: theme === 'secondary'
  })

  if (type === 'link') {
    if (!href) {
      return 'Provide a href to the link'
    }

    return (
      <Link
        className={className}
        href={href}
      >
        {children}
      </Link>)
  }

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
