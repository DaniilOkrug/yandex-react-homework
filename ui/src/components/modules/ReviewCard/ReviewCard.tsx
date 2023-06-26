import Image from "next/image";

import styles from "./ReviewCard.module.scss";
import { Review } from "@/redux/services/types";
import MOCK_IMG from "@images/mock.png";

interface ReviewCardProps {
  reviewData: Review;
}

export function ReviewCard({ reviewData }: ReviewCardProps) {
  return (
    <div className={styles.container}>
      <Image src={MOCK_IMG} alt="Review image" width={100} height={100} />

      <div className={styles.details_container}>
        <div className={styles.header}>
          <h2 className={styles.name}>{reviewData.name}</h2>
          <p>
            Оценка: <span className={styles.rating}>{reviewData.rating}</span>
          </p>
        </div>

        <p>{reviewData.text}</p>
      </div>
    </div>
  );
}
