import './global.scss'
import './patterns.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://ourbelovedgame.com/'),
  title: 'Our Beloved Game',
  description: 'Player info for Our Beloved Game, The Bachelor and The Bachelorette',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  )
}
