import React, { FC } from 'react'
import Skeleton from '@/components/Skeleton'
import '@/styles/SelectedChar.scss'
import { Character } from '@/models/randomChar'
import { useAppSelector } from '@/hooks/redux'
import { useGetRandomCharacterQuery } from '@/redux/slices/marvelApi'
import Loader from '@/components/Loader'

interface IProps {
  char: Character | null
}

const SelectedChar: FC<IProps> = ({ char }) => {
  const selectedCharId = useAppSelector(
    (state) => state.selectedChar.selectedChar
  )
  const { data, isError, isLoading, isFetching } = useGetRandomCharacterQuery(
    selectedCharId || 1231313
  )

  return (
    <aside className="selected-char">
      <h3 className="selected-char__title">
        Please select a character to see information
      </h3>
      {isError ? (
        <Skeleton />
      ) : isFetching ? (
        <Loader />
      ) : (
        <div className="selected-char__container">
          <div className="selected-char__info">
            <img
              src={data?.thumbnail.path + '.' + data?.thumbnail.extension}
              alt={data?.name}
              className="selected-char__info__image"
            />
            <div>
              <h3 className="selected-char__info__title">{data?.name}</h3>
              <button className="page-button selected-char__info__button selected-char__info__button-homepage">
                HOMEPAGE
              </button>
              <button className="page-button selected-char__info__button selected-char__info__button-wiki">
                WIKI
              </button>
            </div>
          </div>
          <p className="selected-char__description">
            {data?.description.length || [].length > 0
              ? data?.description
              : 'This character has no description...'}
          </p>
          <h3 className="selected-char__comics">Comics:</h3>
          {data?.comics.items.length || [].length > 0 ? (
            <ul className="selected-char__comics-list">
              {data?.comics.items.length || [].length > 10
                ? data?.comics.items.slice(0, 10).map((item) => (
                    <li
                      key={item.resourceURI}
                      className="selected-char__comics-list__item"
                    >
                      {item.name}
                    </li>
                  ))
                : data?.comics.items.map((item) => (
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
        </div>
      )}
    </aside>
  )
}

export default SelectedChar
