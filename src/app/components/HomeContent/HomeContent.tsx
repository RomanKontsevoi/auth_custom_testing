'use client'

import { AppleSignIn } from 'app/components/AppleSignIn'
import { Button } from 'app/components/Button'
import { FacebookSignIn } from 'app/components/FacebookSignIn'
import { GoogleSignIn } from 'app/components/GoogleSignIn'
import s from 'app/page.module.scss'
import { useStore } from 'app/store'
import { checkIsTokenExpired } from 'app/utils'
import React, { useEffect, useState } from 'react'

export const HomeContent: React.FC = () => {
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false)

  const accessToken = useStore((state) => state.accessToken)
  const resetTokens = useStore((state) => state.resetTokens)

  useEffect(() => {
    if (accessToken) {
      const isExpired = checkIsTokenExpired(accessToken)

      setIsTokenValid(!isExpired)
    } else {
      setIsTokenValid(false)
    }

  }, [accessToken])

  console.log({ accessToken })

  if (isTokenValid) {
    return (
      <div className={s.mainCardButtons}>
        <Button onClick={resetTokens} >Log Out</Button>
      </div>
    )
  }

  return (
    <>
      <div className={s.mainCardButtons}>
        <Button type="link" href="mobile">Continue with Mobile number</Button>
        <Button type="link" theme="secondary" href="email">Continue with Email</Button>
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
