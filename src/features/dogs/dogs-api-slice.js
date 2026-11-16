import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = 'YOUR_DOGS_API_KEY'

export const dogsApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY)
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})


export const { useFetchBreedsQuery } = dogsApiSlice