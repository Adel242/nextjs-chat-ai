import './globals.css'
import { DM_Sans } from 'next/font/google'
import { Providers } from './providers'

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

export default async function RootLayout({ children, params }: Props) {
  const theme = 'dark'
  return (
    <html lang={params.lang} className={`${font.className} ${theme}`} translate='no'>
      <body>
        <Providers theme={theme}>
          {children}
        </Providers>
      </body>
    </html>
  )
}