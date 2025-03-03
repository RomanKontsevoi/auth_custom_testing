'use client'

import { AppleSignIn } from 'app/components/AppleSignIn'
import { Button } from 'app/components/Button'
import { FacebookSignIn } from 'app/components/FacebookSignIn'
import { GoogleSignIn } from 'app/components/GoogleSignIn'
import s from 'app/page.module.scss'
import React from 'react'

export const HomeContent: React.FC = () => {
  return (
    <>
      <div className={s.mainCardButtons}>
        <Button mode="link" href="mobile">Continue with Mobile number</Button>
        <Button mode="link" theme="secondary" href="email">Continue with Email</Button>
      </div>
      <div className={s.mainCardDivider}>
        <span className={s.mainCardDividerLine} />
        <span className={s.mainCardDividerText}>Or</span>
        <span className={s.mainCardDividerLine} />
      </div>
      <div className={s.mainCardSocialWrapper}>
        <GoogleSignIn className={s.mainCardSocialButton} />
        <FacebookSignIn className={s.mainCardSocialButton} />
        <AppleSignIn className={s.mainCardSocialButton} />
      </div>
    </>
  )
}
