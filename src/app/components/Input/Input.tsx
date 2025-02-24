import cn from 'classnames'
import React from 'react'
import s from './Input.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name?: string
}

export const Input: React.FC<InputProps> = ({
  className = '',
}) => (
  <div className={cn(className, s.inputWrapper)}>
    <input className={s.input} type="text" />
  </div>
)
