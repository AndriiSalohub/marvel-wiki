'use client'

import React, { FC } from 'react'
import { useGetAllComicsQuery } from '@/redux/slices/marvelApi'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'
import ComicsListItem from '@/components/ComicsListItem'
import { Comics } from '@/models/allComics'
import '@/styles/Comics.scss'
import LoadBtn from '@/components/LoadBtn'
import { useAppSelector } from '@/hooks/redux'

const ComicsList: FC = () => {
  const page = useAppSelector((state) => state.page.comicsPage)
  const { data, isLoading, isError, isFetching } = useGetAllComicsQuery(page)
  const comics = data?.data?.results ?? []

  return (
    <>
      {isError ? (
        <div
          style={{
            marginTop: '60px',
          }}
        >
          <ErrorMessage />
        </div>
      ) : null}

      <ul className="comics">
        {comics?.map((item: Comics) => {
          return <ComicsListItem key={item.id} comics={item} />
        })}
      </ul>

      {isLoading ? null : (
        <div className="load-btn-grid">
          <LoadBtn isFetching={isFetching} type="comics" />
        </div>
      )}

      {isLoading ? (
        <div
          style={{
            marginTop: '60px',
          }}
        >
          <Loader />
        </div>
      ) : null}
    </>
  )
}

export default ComicsList
