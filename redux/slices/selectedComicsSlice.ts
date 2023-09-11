import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  selectedComics: null | number
}

const initialState: IState = {
  selectedComics: null,
}

const selectedCharSlice = createSlice({
  name: 'selectedComics',
  initialState,
  reducers: {
    selectComics: (state, action: PayloadAction<number>) => {
      state.selectedComics = action.payload
    },
  },
})

export const { selectComics } = selectedCharSlice.actions
export const selectedComicsReducer = selectedCharSlice.reducer
