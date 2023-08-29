import { configureStore } from '@reduxjs/toolkit'
import { marvelApi } from '@/redux/slices/marvelApi'
import { idReducer } from '@/redux/slices/charIdSlice'

export const store = configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer,
    charId: idReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marvelApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
