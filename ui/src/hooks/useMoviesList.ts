import { useEffect, useState } from "react";

import { useAppSelector } from "@/redux/hooks";
import { useGetMoviesQuery } from "@/redux/services/movieApi";

import { Movie } from "@/redux/services/types";

export function useMoviesList() {
  const { title, cinema, genre } = useAppSelector((state) => state.filters);
  const { data, isLoading } = useGetMoviesQuery(cinema ?? "");

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (isLoading || !data) return;

    const filteredMovies = data.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title) &&
        (movie.genre === genre || !genre)
      );
    });

    setMovies(filteredMovies);
  }, [title, data, genre, isLoading]);

  return {
    movies,
    isLoading: isLoading,
  };
}
