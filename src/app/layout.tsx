'use client'

import { SessionProvider } from 'next-auth/react'
import { IBM_Plex_Sans } from 'next/font/google'
import s from './layout.module.scss'

import './globals.scss'
import { CardHeader } from './components/CardHeader'

const ibmPlexSans = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={ibmPlexSans.className}>
    <SessionProvider>
      <div className={s.page}>
        <div className={s.mainCardWrapper}>
          <CardHeader />
          {children}
        </div>
      </div>
    </SessionProvider>
    </body>
    </html>
  )
}
