'use client'

import { Button } from 'app/components/Button'
import { Input } from 'app/components/Input'
import { FieldValues, useForm, Validate } from 'react-hook-form'
import s from './mobile.module.scss'

export default function MobileSignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleInputValidation: Validate<string, FieldValues> = (value: string) => {
    if (!value) {
      return 'Phone number is required'
    }
    const cleanValue = value.replace(/[^0-9+]/g, '')

    if (cleanValue.length < 12) {
      return 'Phone number is invalid'
    }

    return true
  }

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Input
        {...register('phone', {
          validate: handleInputValidation
        })}
        type="tel"
        wrapperClassName={s.inputWrapper}
      />
      {errors.phone && (
        <p>
          {
            (errors.phone.message as string) ??
            'Invalid phone number'
          }
        </p>
      )}
      <Button type="submit" className={s.submitButton}>Send</Button>
    </form>
  )
}
