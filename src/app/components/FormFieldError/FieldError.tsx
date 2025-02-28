import React from 'react'
import s from './FormFieldError.module.scss'

interface FieldErrorProps {
  message?: string
}

export const FormFieldError: React.FC<FieldErrorProps> = ({ message }) => (
  <p className={s.error}>
    {message ?? 'Invalid field'}
  </p>
)
