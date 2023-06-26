import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <Link className={styles.link} href={"/FAQ"}>
        Вопросы-ответы
      </Link>
      <Link className={styles.link} href={"/about"}>
        О нас
      </Link>
    </footer>
  );
}
