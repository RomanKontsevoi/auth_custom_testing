import { Button } from 'app/components/Button'
import { FormFieldError } from 'app/components/FormFieldError'
import { Input } from 'app/components/Input'
import { requestOtpMobile } from 'app/services/auth'
import { useAuthStore } from 'app/store'
import React from 'react'
import { FieldValues, useForm, Validate } from 'react-hook-form'
import s from './MobileForm.module.scss'

export const MobileForm: React.FC = () => {
  const setOtpTime = useAuthStore((state) => state.setOtpTime)
  const setMobile = useAuthStore((state) => state.setMobile)

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

  const handleFormSubmit = handleSubmit(async ({ phone }) => {
    const cleanValue = phone.replace(/[^0-9+]/g, '')
    const res = await requestOtpMobile(cleanValue)

    const { data } = res

    setMobile(cleanValue)
    setOtpTime(data.time)
  })

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        {...register('phone', {
          validate: handleInputValidation
        })}
        type="tel"
        wrapperClassName={s.inputWrapper}
      />
      {errors.phone && <FormFieldError error={errors.phone}/>}

      <Button type="submit" className={s.submitButton}>Send</Button>
    </form>
  )
}
