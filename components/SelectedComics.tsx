'use client'

import React, { FC, useEffect } from 'react'
import { useAppSelector } from '@/hooks/redux'
import { useGetSingleComicsQuery } from '@/redux/slices/marvelApi'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'
import '@/styles/SelectedComics.scss'
import Link from 'next/link'

const SelectedComics: FC = () => {
  let idFromStorage = ''

  const selectedComicsId = useAppSelector(
    (state) => state.selectedComics.selectedComics
  )

  const { data, isLoading, isError } = useGetSingleComicsQuery(
    selectedComicsId || +localStorage.getItem('selectedComicsId') || 0
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('window is exist')
      if (localStorage.getItem('selectedComicsId') && !selectedComicsId) {
        return
      } else {
        localStorage.setItem('selectedComicsId', selectedComicsId + '')
      }
    }
  }, [])

  return (
    <>
      {isLoading ? <Loader /> : null}
      {isError ? <ErrorMessage /> : null}
      {!isLoading && !isError ? (
        <section className="selected-comics">
          <img
            src={data?.thumbnail.path + '.' + data?.thumbnail.extension}
            alt={data?.title}
          />
          <div className="selected-comics__container">
            <div className="selected-comics__info">
              <h3 className="selected-comics__info__title">{data?.title}</h3>
              <p className="selected-comics__info__description">
                {data?.description?.length || 0 > 0
                  ? data?.description
                  : 'This comics has no description...'}
              </p>
              <p className="selected-comics__info__pages">
                {data?.pageCount} pages
              </p>
              <p className="selected-comics__info__price">
                {data?.prices[0].price}$
              </p>
            </div>
            <button className="selected-comics__back-bth">
              <Link href={'/comics'}>Back to all</Link>
            </button>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default SelectedComics
