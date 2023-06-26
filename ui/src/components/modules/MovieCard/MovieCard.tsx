"use client";

import { useState } from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateCount } from "@/redux/features/basket";
import { genresMapper } from "@/helpers/genresMapper";
import { useRouter } from "next/navigation";

import { Counter } from "../Counter/Counter";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";

import styles from "./MovieCard.module.scss";
import CloseIcon from "../../../assets/icons/close.svg";
import { Movie } from "@/redux/services/types";

interface MovieCardProps {
  movieData: Movie;
  deleteEnabled?: boolean;
}

export function MovieCard({
  movieData,
  deleteEnabled = false,
}: MovieCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const moviesOrders = useAppSelector((state) => state.basket);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const hadleConterChange = (count: number) => {
    if (!count) {
      setShowDeleteModal(true);
    } else {
      dispatch(
        updateCount({
          id: movieData.id,
          count,
        })
      );
    }
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.poster}
        src={movieData.posterUrl}
        alt="Movie image"
        width={100}
        height={120}
      />

      <div className={styles.description_container}>
        <h3
          className={styles.title}
          onClick={() => router.push(`/films/${movieData.id}`)}
        >
          {movieData.title}
        </h3>
        <p className={styles.genre}>{genresMapper(movieData.genre)}</p>
      </div>

      <div className={styles.actions_container}>
        <Counter
          initialValue={moviesOrders[movieData.id] ?? 0}
          onChange={hadleConterChange}
        />
        <button
          hidden={!deleteEnabled}
          className={styles.remove_btn}
          onClick={() => setShowDeleteModal(true)}
        >
          <CloseIcon />
        </button>
      </div>

      <DeleteConfirmationModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onAccept={() =>
          dispatch(
            updateCount({
              id: movieData.id,
              count: 0,
            })
          )
        }
        onReject={() => setShowDeleteModal(false)}
      />
    </div>
  );
}
