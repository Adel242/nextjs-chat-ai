"use client"

import './globals.css'
import { DM_Sans } from 'next/font/google'
import { Providers } from './providers'
import { useEffect } from 'react'
import { useCredentialsStore } from './stores/store'


interface Props {
  theme: string
  children: React.ReactNode
}

const font = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

interface Props {
  params: {
    lang: string
  }
  children: React.ReactNode
}

export default function RootLayout({ children, params }: Props) {
  const theme = 'dark'
  const {setCredentials} =  useCredentialsStore()

  useEffect(() => {
    const apiKey = localStorage.getItem('apiKey') ?? ""
    const orgId = localStorage.getItem('orgId') ?? ""
    setCredentials({apiKey, orgId})
  },[])
  
  return (
    <html lang={params.lang} className={`${font.className} ${theme}`} translate='no'>
      <body>
        <Providers theme={theme}>
          {/* <Navbar /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}