'use client'

import { MobileForm } from 'app/mobile/components/MobileForm/MobileForm'
import { useState } from 'react'

export default function MobileSignInPage() {
  const [otpTime, setOtpTime] = useState(null)

  if (!otpTime) {
    return (
      <MobileForm setOtpTime={setOtpTime} />
    )
  }

  return (
    <div>OTP Form</div>
  )
}
