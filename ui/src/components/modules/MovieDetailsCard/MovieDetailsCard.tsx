"use client";

import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { genresMapper } from "@/helpers/genresMapper";

import { Counter } from "../Counter/Counter";

import styles from "./MovieDetailsCard.module.scss";
import { Movie } from "@/redux/services/types";
import { updateCount } from "@/redux/features/basket";

interface MovieDetailsCardProps {
  movieData: Movie;
}

export function MovieDetailsCard({ movieData }: MovieDetailsCardProps) {
  const dispatch = useAppDispatch();
  const moviesOrders = useAppSelector((state) => state.basket);

  return (
    <section className={styles.container}>
      <Image
        className={styles.poster}
        src={movieData.posterUrl}
        alt="Movie image"
        width={400}
        height={500}
      />

      <section className={styles.details_container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{movieData.title}</h2>
          <Counter
            initialValue={moviesOrders[movieData.id] ?? 0}
            onChange={(count) =>
              dispatch(
                updateCount({
                  id: movieData.id,
                  count,
                })
              )
            }
          />
        </div>

        <div className={styles.details}>
          <p>
            <span>Жанр:</span> {genresMapper(movieData.genre)}
          </p>
          <p>
            <span>Год выпуска:</span> {movieData.releaseYear}
          </p>
          <p>
            <span>Рейтинг:</span> {movieData.rating}
          </p>
          <p>
            <span>Режиссер:</span> {movieData.director}
          </p>
        </div>

        <div className={styles.description}>
          <h3 className={styles.title}>Описание</h3>

          <p>{movieData.description}</p>
        </div>
      </section>
    </section>
  );
}
