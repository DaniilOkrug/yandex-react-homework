"use client";

import Link from "next/link";

import styles from "./Header.module.scss";
import Backet from "@icons/basket.svg";
import { useAppSelector } from "@/redux/hooks";

export function Header() {
  const moviesOrders = useAppSelector((state) => state.basket);

  return (
    <header className={styles.container}>
      <Link className={styles.title} href={"/"}>
        Билетопоиск
      </Link>

      <div className={styles.backet_container}>
        <div
          className={styles.movies_counter}
          hidden={!Object.keys(moviesOrders).length}
        >
          {Object.values(moviesOrders).reduce((acc, el) => acc + el, 0)}
        </div>
        <Link href={"/basket"}>
          <Backet />
        </Link>
      </div>
    </header>
  );
}
