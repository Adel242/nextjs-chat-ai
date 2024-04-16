'use client'

import { NextUIProvider } from '@nextui-org/react'

interface Props {
  theme: string
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
