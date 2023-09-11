import React, { FC } from 'react'
import SelectedComics from '@/components/SelectedComics'

interface IProps {
  params: {
    title: string
  }
}

const SingleComics: FC<IProps> = ({ params: { title } }) => {
  return (
    <>
      <SelectedComics />
    </>
  )
}

export default SingleComics
