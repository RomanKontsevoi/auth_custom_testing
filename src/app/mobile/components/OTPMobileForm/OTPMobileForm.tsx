import { Button } from 'app/components/Button'
import { FormFieldError } from 'app/components/FormFieldError'
import { Slot } from 'app/mobile/components/OTPMobileForm/Slot'
import { loginByMobile } from 'app/services/auth'
import { useAuthStore, useLoadingStore } from 'app/store'
import { checkIsFormSubmitDisabled } from 'app/utils'
import { OTPInput } from 'input-otp'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, FieldValues, useForm, Validate } from 'react-hook-form'
import s from './OTPMobileForm.module.scss'

const OTP_LENGTH = 5

export const OTPMobileForm: React.FC = () => {
  const mobile = useAuthStore((state) => state.mobile)
  const otpTime = useAuthStore((state) => state.otpTime)
  const setOtpTime = useAuthStore((state) => state.setOtpTime)
  const resetOtpFlow = useAuthStore((state) => state.resetOtpFlow)
  const isLoginLoading = useLoadingStore((state) => state.isLoginLoading)
  const setTokens = useAuthStore((state) => state.setTokens)
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError
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

    try {
      const res = await loginByMobile({
        otp,
        otp_start_time: otpTime,
        mobile
      })

      const { data: tokens, message } = res

      if (!tokens) {
        setError('root', {
          type: 'manual',
          message: message ??
            'Failed to login. Please check your OTP and try again.'
        })

        return
      }

      setTokens(tokens)

      router.push('/')
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: (error as Error)?.message ??
          'Failed to login. Please check your OTP and try again.'
      })
    }
  })

  const disabled = checkIsFormSubmitDisabled(errors, dirtyFields)

  const goBack = () => {
    setOtpTime(null)
  }

  return (
    <>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <Controller
          name="otp"
          control={control}
          rules={{
            validate: handleInputValidation
          }}
          render={({ field }) => (
            <OTPInput
              className={s.OTPInput}
              maxLength={OTP_LENGTH}
              render={({ slots }) => (
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
        {errors.otp && <FormFieldError message={errors.otp.message as string} />}
        <Button
          isLoading={isLoginLoading}
          disabled={disabled}
          type="submit"
          className={s.submitButton}
        >
          Send
        </Button>
        {errors.root && <FormFieldError message={errors.root.message} />}
        <Button
          theme="secondary"
          className={s.submitButton}
          onClick={goBack}
        >
          Back
        </Button>
      </form>
    </>
  )
}
