import { Button } from 'app/components/Button'
import { FormFieldError } from 'app/components/FormFieldError'
import { Slot } from 'app/mobile/components/OTPMobileForm/Slot'
import { loginByMobile } from 'app/services/auth'
import { useAuthStore, useLoadingStore } from 'app/store'
import { OTPInput } from 'input-otp'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import { Controller, FieldValues, useForm, Validate } from 'react-hook-form'
import s from './OTPMobileForm.module.scss'

const OTP_LENGTH = 5

export const OTPMobileForm: React.FC = () => {
  const mobile = useAuthStore((state) => state.mobile)
  const otpTime = useAuthStore((state) => state.otpTime)
  const resetOtpFlow = useAuthStore((state) => state.resetOtpFlow)
  const isLoginLoading = useLoadingStore((state) => state.isLoginLoading)
  const setTokens = useAuthStore((state) => state.setTokens)
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm()

  const handleInputValidation: Validate<string, FieldValues> = (value: string) => {
    if (!value) {
      return 'OTP is required'
    }

    if (value.length < OTP_LENGTH) {
      return 'OTP is invalid'
    }

    return true
  }

  const handleFormSubmit = handleSubmit(async ({ otp }) => {
    if (!(otpTime && mobile)) {
      return resetOtpFlow()
    }

    const res = await loginByMobile({
      otp,
      otp_start_time: otpTime,
      mobile
    })

    const { data: tokens } = res

    console.log({ tokens })

    setTokens(tokens)

    router.push('/')
  })


  const isButtonDisabled = useMemo(() => {
    return Object.keys(errors).length > 0 || Object.keys(dirtyFields).length === 0
  }, [errors, dirtyFields])

  return (
    <form onSubmit={handleFormSubmit}>
      <Controller
        name="otp"
        control={control}
        rules={{
          validate: handleInputValidation
        }}
        render={({ field }) => (
          <OTPInput
            className={s.OTPInput}
            maxLength={OTP_LENGTH} render={({ slots }) => (
            <div className={s.slotsWrapper}>
              {slots.map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          )}
            {...field}
          />
        )}
      />
      {errors.otp && <FormFieldError error={errors.otp} />}
      <Button
        isLoading={isLoginLoading}
        disabled={isButtonDisabled}
        type="submit"
        className={s.submitButton}
      >
        Send
      </Button>
    </form>
  )
}
