import React, { FC } from 'react'
import '@/styles/LoadBtn.scss'
import { useAppDispatch } from '@/hooks/redux'
import { updatePage } from '@/redux/slices/pageSlice'

interface IProps {
  isFetching: boolean
}

const LoadBtn: FC<IProps> = ({ isFetching }) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className="load-btn page-button"
      onClick={() => dispatch(updatePage())}
      disabled={isFetching}
    >
      LOAD MORE
    </button>
  )
}

export default LoadBtn
