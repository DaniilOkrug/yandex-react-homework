"use client";

import { useAppSelector } from "@/redux/hooks";
import { useGetMoviesFromIdsQuery } from "@/redux/services/movieApi";

import styles from "./page.module.scss";
import { MovieCard } from "@/components/modules";

export default function Basket() {
  const moviesOrders = useAppSelector((state) => state.basket);

  const { data: moviesData = [], isLoading } = useGetMoviesFromIdsQuery(
    Object.keys(moviesOrders)
  );

  return (
    <div className={styles.container}>
      <div className={styles.movies_container}>
        {moviesData.length === 0 && !isLoading && (
          <p>У вас пока что нет заказов</p>
        )}

        {isLoading && <p>Загрузка...</p>}

        {moviesData
          .filter((movie) => Object.keys(moviesOrders).includes(movie.id))
          .map((movie) => (
            <MovieCard key={movie.id} movieData={movie} deleteEnabled />
          ))}
      </div>

      <div className={styles.result}>
        <p>Итого билетов:</p>
        <p>{Object.values(moviesOrders).reduce((acc, el) => acc + el, 0)}</p>
      </div>
    </div>
  );
}
