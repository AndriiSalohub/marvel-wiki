'use client'

import { FC } from 'react'
import { useGetAllCharactersQuery } from '@/redux/slices/marvelApi'
import '@/styles/CharList.scss'
import ErrorMessage from '@/components/ErrorMessage'
import CharListItem from '@/components/CharListItem'
import { Result } from '@/models/allChar'
import { useAppSelector } from '@/hooks/redux'
import Loader from '@/components/Loader'
import SelectedChar from '@/components/SelectedChar'
import LoadBtn from '@/components/LoadBtn'

const CharList: FC = () => {
  const page = useAppSelector((state) => state.page.charsPage)
  const { data, isLoading, isError, isFetching } =
    useGetAllCharactersQuery(page)
  const chars = data?.data?.results ?? []
  const selectedCharId = useAppSelector(
    (state) => state.selectedChar.selectedChar
  )

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
      <div
        style={{
          display: 'flex',
          columnGap: '20px',
        }}
      >
        <ul className="char-list">
          {chars?.map((item: Result) => {
            return <CharListItem key={item.id} item={item} />
          })}
          {isLoading ? null : (
            <div className="load-btn-grid">
              <LoadBtn isFetching={isFetching} type="chars" />
            </div>
          )}
        </ul>
        {isLoading || isError ? null : (
          <SelectedChar
            char={
              selectedCharId
                ? chars.filter((item: Result) => item.id === selectedCharId)[0]
                : null
            }
          />
        )}
      </div>
      {isLoading ? (
        <div
          style={{
            marginTop: '60px',
          }}
        >
          <Loader />
        </div>
      ) : null}

      {isLoading ? <LoadBtn isFetching={isFetching} type="chars" /> : null}
    </>
  )
}

export default CharList
