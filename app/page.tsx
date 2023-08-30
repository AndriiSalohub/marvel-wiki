import { FC } from 'react'
import RandomChar from '@/components/RandomChar'
import CharList from '@/components/CharList'

const Home: FC = () => {
  return (
    <>
      <RandomChar />
      <CharList />
    </>
  )
}

export default Home
