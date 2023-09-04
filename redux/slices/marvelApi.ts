import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
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
      // query: (offset) => ({
      //   url: 'characters',
      //   params: {
      //     apikey: '6e26eeacf3a4151ab8375a4f052c6323',
      //     limit: 16,
      //     offset: offset,
      //   },
      // }),
      query: (page) =>
        `characters?offset=${
          210 + page * 9
        }&limit=9&apikey=6e26eeacf3a4151ab8375a4f052c6323`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }: { endpointName: string }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.data.results.push(...newItems.data.results)
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      // transformResponse: (response: AllChar) => response.data.results,
    }),
  }),
})

export const { useGetRandomCharacterQuery, useGetAllCharactersQuery } =
  marvelApi
