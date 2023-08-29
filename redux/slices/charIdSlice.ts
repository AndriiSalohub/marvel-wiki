import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  charId: number
}

const initialState: IState = {
  charId: 0,
}
export const charIdSlice = createSlice({
  name: 'charId',
  initialState,
  reducers: {
    updateCharId: (state, action: PayloadAction<number>) => {
      state.charId = action.payload
    },
  },
})

export const { updateCharId } = charIdSlice.actions
export const idReducer = charIdSlice.reducer
