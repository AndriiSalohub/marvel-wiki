import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  selectedChar: null | number
}

const initialState: IState = {
  selectedChar: null,
}

const selectedCharSlice = createSlice({
  name: 'selectedChar',
  initialState,
  reducers: {
    selectChar: (state, action: PayloadAction<number>) => {
      state.selectedChar = action.payload
    },
  },
})

export const { selectChar } = selectedCharSlice.actions
export const selectedCharReducer = selectedCharSlice.reducer
