import { configureStore } from '@reduxjs/toolkit'
import { marvelApi } from '@/redux/slices/marvelApi'
import { idReducer } from '@/redux/slices/charIdSlice'
import { offsetReducer } from '@/redux/slices/offsetSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pageReducer } from '@/redux/slices/pageSlice'

export const store = configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer,
    charId: idReducer,
    offset: offsetReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marvelApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
