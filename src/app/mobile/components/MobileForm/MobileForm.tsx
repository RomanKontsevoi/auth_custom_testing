import { Button } from 'app/components/Button'
import { Input } from 'app/components/Input'
import s from 'app/mobile/mobile.module.scss'
import { requestOtpMobile } from 'app/services/auth'
import React, { Dispatch, SetStateAction } from 'react'
import { FieldValues, useForm, Validate } from 'react-hook-form'

interface MobileFormProps {
  setOtpTime: Dispatch<SetStateAction<null>>
}

export const MobileForm: React.FC<MobileFormProps> = ({ setOtpTime }) => {
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

    setOtpTime(data.time)

    console.log(res)
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
