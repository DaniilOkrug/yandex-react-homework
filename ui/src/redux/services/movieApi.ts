import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Cinema, Movie, Review } from "./types";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getCinemas: builder.query<Cinema[], void>({
      query: () => "cinemas",
    }),
    getMovies: builder.query<Movie[], string | null>({
      query: (cinemaId) => `movies${cinemaId ? `?cinemaId=${cinemaId}` : ""}`,
    }),
    getMoviesFromIds: builder.query<Movie[], string[]>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchQuery) {
        const queries = _arg.map(
          async (movieId) => await fetchQuery(`movie?movieId=${movieId}`)
        );

        const res = await Promise.all(queries);

        return { data: res.map((el) => el.data) as Movie[] };
      },
    }),
    getMovie: builder.query<Movie, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
    getReviews: builder.query<Review[], string>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const {
  useGetCinemasQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetMoviesFromIdsQuery,
  useGetReviewsQuery,
} = movieApi;
