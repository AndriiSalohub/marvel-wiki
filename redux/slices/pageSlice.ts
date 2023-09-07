import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  charsPage: number
  comicsPage: number
}

const initialState: IState = {
  charsPage: 0,
  comicsPage: 0,
}
export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<string>) => {
      if (action.payload === 'chars') {
        state.charsPage += 1
      }
      if (action.payload === 'comics') {
        state.comicsPage += 1
      }
    },
  },
})

export const { updatePage } = pageSlice.actions
export const pageReducer = pageSlice.reducer
