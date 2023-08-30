'use client'

import { FC } from 'react'
import { useGetAllCharactersQuery } from '@/redux/slices/marvelApi'
import '@/styles/CharList.scss'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'
import CharListItem from '@/components/CharListItem'
import { Result } from '@/models/allChar'

const CharList: FC = () => {
  const { data, isError, isFetching } = useGetAllCharactersQuery(210)
  console.log(data)
  return (
    <>
      {isFetching ? (
        <div
          style={{
            marginTop: '60px',
          }}
        >
          <Loader />
        </div>
      ) : null}
      <ul className="char-list">
        {isError ? (
          <div
            style={{
              marginTop: '60px',
            }}
          >
            <ErrorMessage />
          </div>
        ) : null}
        {data && !isFetching && !isError
          ? data?.map((item: Result) => {
              return <CharListItem key={item.id} item={item} />
            })
          : null}
      </ul>
    </>
  )
}

export default CharList
