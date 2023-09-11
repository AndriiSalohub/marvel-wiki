import { FC, ReactNode } from 'react'
import Banner from '@/components/Banner'

interface IRootLayout {
  children: ReactNode
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <>
      <Banner />
      {children}
    </>
  )
}

export default RootLayout
