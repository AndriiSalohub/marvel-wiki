import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AllChar } from '@/models/allChar'
import { Character, RandomChar } from '@/models/randomChar'

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
      transformResponse: (response: RandomChar) => response.data.results[0],
    }),
    getAllCharacters: build.query<any, number>({
      query: (offset) => ({
        url: 'characters',
        params: {
          apikey: '6e26eeacf3a4151ab8375a4f052c6323',
          limit: 16,
          offset: offset,
        },
      }),
      transformResponse: (response: AllChar) => response.data.results,
    }),
  }),
})

export const { useGetRandomCharacterQuery, useGetAllCharactersQuery } =
  marvelApi
