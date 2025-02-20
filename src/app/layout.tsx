'use client'

import { SessionProvider } from 'next-auth/react'
import { IBM_Plex_Sans } from 'next/font/google'

import './globals.scss'

const ibmPlexSans = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
