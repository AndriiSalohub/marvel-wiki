import Header from '@/components/Header'
import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import '@/styles/globals.scss'
import '@/styles/button.scss'
import ReduxProvider from '@/redux/provider'
import Image from 'next/image'
import background from '../public/images/background.png'

interface IRootLayout {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Marvel wiki',
  description:
    'Welcome to "Marvel Universe: Comprehensive Guide," your one-stop destination for all things Marvel. Dive into the rich and expansive Marvel Universe with our detailed database of characters, their backgrounds, and an extensive list of comics.',
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
        <Image
          src={background}
          alt="sdf"
          width={400}
          height={100}
          className="background-img"
        />
      </body>
    </html>
  )
}

export default RootLayout
