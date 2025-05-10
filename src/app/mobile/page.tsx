'use client'

import { MobileForm } from 'app/mobile/components/MobileForm/MobileForm'
import { OTPMobileForm } from 'app/mobile/components/OTPMobileForm/OTPMobileForm'
import { useAuthStore } from 'app/store'

export default function MobileSignInPage() {
  const otpTime = useAuthStore((state) => state.otpTime)

  if (!otpTime) {
    return (
      <MobileForm />
    )
  }

  return (
    <OTPMobileForm />
  )
}
