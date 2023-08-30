import React, { FC } from 'react'
import '@/styles/CharListItem.scss'
import { Result } from '@/models/allChar'

interface IProps {
  item: Result
}

const CharListItem: FC<IProps> = ({ item }) => {
  return (
    <li key={item.id} className="char-list__item">
      <img
        src={item.thumbnail.path + '.' + item.thumbnail.extension}
        alt={item.name}
        className="char-list__item__image"
      />
      <p className="char-list__item__container">
        <h1 className="char-list__item__title">{item.name}</h1>
      </p>
    </li>
  )
}

export default CharListItem
