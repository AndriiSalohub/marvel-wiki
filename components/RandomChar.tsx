'use client'
import { FC, useEffect } from 'react'
import '../styles/RandomChar.scss'
import { useGetRandomCharacterQuery } from '@/redux/slices/marvelApi'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { updateCharId } from '@/redux/slices/charIdSlice'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'

const RandomChar: FC = () => {
  const dispatch = useAppDispatch()
  const charId = useAppSelector((state) => state.charId.charId)

  const { data, isFetching, isError } = useGetRandomCharacterQuery(charId, {
    refetchOnFocus: true,
  })

  console.log(data)
  useEffect(() => {
    dispatch(
      updateCharId(Math.floor(Math.random() * (1011400 - 1011000)) + 1011000)
    )
  }, [])

  return (
    <>
      <div className="random-char">
        <div className="random-char__info">
          {isFetching ? <Loader /> : null}
          {isError ? <ErrorMessage /> : null}
          {data && !isFetching && !isError ? (
            <>
              <img
                src={data.thumbnail.path + '.' + data.thumbnail.extension}
                alt={data.name}
                className="random-char__info__image"
              />
              <div className="random-char__info__container">
                <h3 className="random-char__info__name">{data.name}</h3>
                <p className="random-char__info__description">
                  {data.description.length > 0
                    ? `${data.description.slice(0, 210)}...`
                    : 'This character has no description...'}
                </p>
                <button className="random-char__info__button random-char__info__button-homepage random-char__button">
                  <a href={data.urls[0].url} target="_blank">
                    HOMEPAGE
                  </a>
                </button>
                <button className="random-char__info__button random-char__info__button-wiki random-char__button">
                  <a href={data.urls[1].url} target="_blank">
                    WIKI
                  </a>
                </button>
              </div>
            </>
          ) : null}
        </div>
        <div className="random-char__banner">
          <h3 className="random-char__banner__title">
            Random character for today!{' '}
            <span>Do you want to get to know him better?</span>
          </h3>
          <h4 className="random-char__banner__subtitle">
            Or choose another one
          </h4>
          <button
            className="random-char__banner__button random-char__button random-char__button-red"
            onClick={() =>
              dispatch(
                updateCharId(
                  Math.floor(Math.random() * (1011400 - 1011000)) + 1011000
                )
              )
            }
          >
            TRY IT
          </button>
        </div>
      </div>
    </>
  )
}

export default RandomChar
