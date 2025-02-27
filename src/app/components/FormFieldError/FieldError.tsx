import React from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import s from './FormFieldError.module.scss'

interface FieldErrorProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl>
}

export const FormFieldError: React.FC<FieldErrorProps> = ({ error }) => (
  <p className={s.error}>
    {error.message as string ?? 'Invalid field'}
  </p>
)
