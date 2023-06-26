import './global.scss'
import './patterns.scss'
import { Inter } from 'next/font/google'
import { Schibsted_Grotesk } from 'next/font/google'
import Head from 'next/head';

const sgfont = Schibsted_Grotesk({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/og-charity.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Beloved Game 🌹" />
        <meta name="twitter:description" content="Check out the men of Katie's Season 17 of the Bachelorette." />
        <meta name="twitter:image" content="https://ourbelovedgame.com/twitter-charity.png" />
      </Head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  )
}
