import React, { FC, useState } from 'react'
import '@/styles/CharListItem.scss'
import { Result } from '@/models/allChar'
import '@/styles/button.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { selectChar } from '@/redux/slices/selectedCharSlice'

interface IProps {
  item: Result
}

const CharListItem: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch()
  const selectedCharId = useAppSelector(
    (state) => state.selectedChar.selectedChar
  )
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <li
      key={item.id}
      className={
        selectedCharId === item.id
          ? 'char-list__item char-list__item-selected'
          : 'char-list__item'
      }
      onClick={() => {
        dispatch(selectChar(item.id))
      }}
      tabIndex={0}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          dispatch(selectChar(item.id))
        }
      }}
    >
      <img
        src={item.thumbnail.path + '.' + item.thumbnail.extension}
        alt={item.name}
        className="char-list__item__image"
        onClick={() => setInfoOpen((prevState) => !prevState)}
      />
      <div className="char-list__item__container">
        <h1 className="char-list__item__title">{item.name}</h1>
      </div>
      {infoOpen ? (
        <section className="char-list__item__info">
          <p className="char-list__item__info__description">
            {item.description.length > 0
              ? item.description
              : 'This character has no description...'}
          </p>
          <button className="page-button char-list__item__info__button char-list__item__info__button-homepage">
            <a href={item.urls[0].url} target="_blank">
              HOMEPAGE
            </a>
          </button>
          <button className="page-button char-list__item__info__button char-list__item__info__button-wiki">
            <a href={item.urls[1].url} target="_blank">
              WIKI
            </a>
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
