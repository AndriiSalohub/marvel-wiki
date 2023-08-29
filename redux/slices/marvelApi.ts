import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Character } from '@/models/models'

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com:443/v1/public/',
  }),
  endpoints: (build) => ({
    getRandomCharacter: build.query<Character, number>({
      query: (id) => ({
        url: `characters/${id}`,
        params: {
          apikey: '6e26eeacf3a4151ab8375a4f052c6323',
        },
      }),
      transformResponse: (resposnse: any) => resposnse.data.results[0],
    }),
  }),
})

export const { useGetRandomCharacterQuery } = marvelApi
