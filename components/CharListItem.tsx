import React, { FC, useState } from 'react'
import '@/styles/CharListItem.scss'
import { Result } from '@/models/allChar'
import '@/styles/button.scss'

interface IProps {
  item: Result
}

const CharListItem: FC<IProps> = ({ item }) => {
  const [infoOpen, setInfoOpen] = useState(false)
  console.log(item)
  return (
    <li key={item.id} className="char-list__item">
      <img
        src={item.thumbnail.path + '.' + item.thumbnail.extension}
        alt={item.name}
        className="char-list__item__image"
        onClick={() => setInfoOpen((prevState) => !prevState)}
      />
      <p className="char-list__item__container">
        <h1 className="char-list__item__title">{item.name}</h1>
      </p>
      {infoOpen ? (
        <section className="char-list__item__info">
          <p className="char-list__item__info__description">
            {item.description.length > 0
              ? item.description
              : 'This character has no description...'}
          </p>
          <button className="page-button char-list__item__info__button char-list__item__info__button-homepage">
            HOMEPAGE
          </button>
          <button className="page-button char-list__item__info__button char-list__item__info__button-wiki">
            WIKI
          </button>
          <h3 className="char-list__item__info__comics-title">Comics:</h3>
          {item.comics.items.length > 0 ? (
            <ul className="char-list__item__info__comics__list">
              {item.comics.items.length > 10
                ? item.comics.items.slice(0, 10).map((item) => (
                    <li
                      key={item.resourceURI}
                      className="char-list__item__info__comics__list__item"
                    >
                      {item.name}
                    </li>
                  ))
                : item.comics.items.map((item) => (
                    <li
                      key={item.resourceURI}
                      className="char-list__item__info__comics__list__item"
                    >
                      {item.name}
                    </li>
                  ))}
            </ul>
          ) : (
            <h3>This character has no comics...</h3>
          )}
        </section>
      ) : null}
    </li>
  )
}

export default CharListItem
