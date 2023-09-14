import React, { FC } from 'react'
import SelectedComics from '@/components/SelectedComics'

interface IProps {
  params: {
    di: number
  }
}

const SingleComics: FC<IProps> = ({ params: { id } }) => {
  return (
    <>
      <SelectedComics id={id} />
    </>
  )
}

export default SingleComics
