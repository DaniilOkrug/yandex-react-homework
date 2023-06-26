"use client";

import {
  useGetMovieQuery,
  useGetReviewsQuery,
} from "@/redux/services/movieApi";

import { MovieDetailsCard, ReviewCard } from "@/components/modules";

import styles from "./page.module.scss";

interface FilmPageProps {
  params: {
    id: string;
  };
}

export default function FilmPage({ params }: FilmPageProps) {
  const { data: movieData, isLoading: isLoadingMovie } = useGetMovieQuery(
    params.id
  );
  const { data: reviews = [], isLoading: isLoadingReviews } =
    useGetReviewsQuery(movieData?.id || "", {
      skip: !Boolean(movieData?.id),
    });

  if (isLoadingMovie || isLoadingReviews) return <div>Загрузка...</div>;

  return (
    <section className={styles.container}>
      {Boolean(movieData) && <MovieDetailsCard movieData={movieData!} />}

      <div className={styles.reviews_container}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} reviewData={review} />
        ))}
      </div>
    </section>
  );
}