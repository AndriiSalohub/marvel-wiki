import React, { FC } from 'react'
import { Comics } from '@/models/allComics'
import '@/styles/ComicsListItem.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { selectComics } from '@/redux/slices/selectedComicsSlice'
import Link from 'next/link'

interface IProps {
  comics: Comics
}

const ComicsListItem: FC<IProps> = ({ comics }) => {
  const dispatch = useAppDispatch()
  const selectedComics = useAppSelector(
    (state) => state.selectedComics.selectedComics
  )

  return (
    <li className="comics-list__item">
      <Link href={`comics/${comics.title}`}>
        <img
          src={comics.thumbnail.path + '.' + comics.thumbnail.extension}
          alt={comics.title}
          onClick={() => dispatch(selectComics(comics.id))}
        />
      </Link>
      <h3 className="comics-list__item__title">{comics.title}</h3>
      <p className="comics-list__item__price">{comics.prices[0].price}$</p>
    </li>
  )
}

export default ComicsListItem
