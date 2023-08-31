'use client'

import { FC } from 'react'
import { useGetAllCharactersQuery } from '@/redux/slices/marvelApi'
import '@/styles/CharList.scss'
import ErrorMessage from '@/components/ErrorMessage'
import CharListItem from '@/components/CharListItem'
import { Result } from '@/models/allChar'
import { useAppSelector } from '@/hooks/redux'
import LoadBtn from '@/components/LoadBtn'
import Loader from '@/components/Loader'

const CharList: FC = () => {
  const page = useAppSelector((state) => state.page.page)
  const { data, isLoading, isError, isFetching } =
    useGetAllCharactersQuery(page)
  const chars = data?.data?.results ?? []

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
      <ul className="char-list">
        {chars?.map((item: Result) => {
          return <CharListItem key={item.id} item={item} />
        })}
      </ul>
      {isLoading ? (
        <div
          style={{
            marginTop: '60px',
          }}
        >
          <Loader />
        </div>
      ) : null}
      <LoadBtn isFetching={isFetching} />
    </>
  )
}

export default CharList
