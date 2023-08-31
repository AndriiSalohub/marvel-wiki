import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  offset: number
}

const initialState: IState = {
  offset: 210,
}
export const offsetSlice = createSlice({
  name: 'offset',
  initialState,
  reducers: {
    updateOffset: (state, action: PayloadAction<number>) => {
      state.offset += action.payload
    },
  },
})

export const { updateOffset } = offsetSlice.actions
export const offsetReducer = offsetSlice.reducer
