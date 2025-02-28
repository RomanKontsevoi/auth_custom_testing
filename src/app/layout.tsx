'use client'

import { Button } from 'app/components/Button'
import { useAuthStore } from 'app/store'
import { checkIsTokenExpired } from 'app/utils'
import { SessionProvider, signOut } from 'next-auth/react'
import { IBM_Plex_Sans } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CardHeader } from './components/CardHeader'
import s from './layout.module.scss'

import './globals.scss'

const ibmPlexSans = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false)

  const accessToken = useAuthStore((state) => state.accessToken)
  const resetState = useAuthStore((state) => state.resetState)

  const router = useRouter()

  useEffect(() => {
    if (accessToken) {
      const isExpired = checkIsTokenExpired(accessToken)

      setIsTokenValid(!isExpired)
    } else {
      setIsTokenValid(false)
    }

  }, [accessToken])

  const handleLogOut = async () => {
    resetState()
    await signOut()
    router.push('/')
  }

  return (
    <html lang="en">
    <body className={ibmPlexSans.className}>
    <SessionProvider>
      <div className={s.page}>
        <div className={s.mainCardWrapper}>
          <CardHeader />
          {
            isTokenValid ? (
              <div className={s.mainCardButton}>
                <Button onClick={handleLogOut}>
                  Log Out
                </Button>
              </div>
            ) : children
          }
        </div>
      </div>
    </SessionProvider>
    </body>
    </html>
  )
}
