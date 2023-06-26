"use client";

import { MovieCard } from "@/components/modules";

import styles from "./MoviesList.module.scss";
import { useMoviesList } from "@/hooks/useMoviesList";

export function MoviesList() {
  const { isLoading, movies } = useMoviesList();

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={styles.container}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}
