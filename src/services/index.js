// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const apiKey = '877c9dbeb82439a7fe2f235ccc4d3a25';
// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzdjOWRiZWI4MjQzOWE3ZmUyZjIzNWNjYzRkM2EyNSIsInN1YiI6IjY2MjE1N2QwNzg1NzBlMDE3ZTEwODM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JyoV6cxplBuZY09ZoQo0JpARA0GdEpXM_HuU7sV0VXg'


// const customHeaders = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${token}`,
// };

// export const movieApi = createApi({
//   reducerPath: 'movieApi',
//   baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
//   prepareHeaders: (headers) => {
//     return {
//       ...headers,
//       ...customHeaders,
//     };
//   },
//   endpoints: (builder) => ({
//     getMovies: builder.query({
//       query: () => `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
//     }),
//     getMovieDetails: builder.query({
//       query: (movieId) => `movie/${movieId}?api_key=${apiKey}&language=en-US`,
//     }),
//   }),
// });

// export const { useGetMoviesQuery, useGetMovieDetailsQuery } = movieApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '877c9dbeb82439a7fe2f235ccc4d3a25';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzdjOWRiZWI4MjQzOWE3ZmUyZjIzNWNjYzRkM2EyNSIsInN1YiI6IjY2MjE1N2QwNzg1NzBlMDE3ZTEwODM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JyoV6cxplBuZY09ZoQo0JpARA0GdEpXM_HuU7sV0VXg'
export const imageBaseUrl = 'https://image.tmdb.org/t/p/w185'
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('accept', 'application/json')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?language=en-US`,
    }),
  }),

});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = apiSlice;