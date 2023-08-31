import { createSlice } from '@reduxjs/toolkit'

interface IState {
  page: number
}

const initialState: IState = {
  page: 0,
}
export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePage: (state) => {
      state.page += 1
    },
  },
})

export const { updatePage } = pageSlice.actions
export const pageReducer = pageSlice.reducer
