import React, { FC } from 'react'
import { Comics } from '@/models/allComics'
import '@/styles/ComicsListItem.scss'
import Link from 'next/link'

interface IProps {
  comics: Comics
}

const ComicsListItem: FC<IProps> = ({ comics }) => {
  return (
    <li className="comics-list__item">
      <Link href={`comics/${comics.id}`}>
        <img
          src={comics.thumbnail.path + '.' + comics.thumbnail.extension}
          alt={comics.title}
        />
      </Link>
      <h3 className="comics-list__item__title">{comics.title}</h3>
      <p className="comics-list__item__price">{comics.prices[0].price}$</p>
    </li>
  )
}

export default ComicsListItem
