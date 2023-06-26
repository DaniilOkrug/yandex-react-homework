import { MoviesList } from "@/components/layouts";
import { SideFilter } from "@/components/modules";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <SideFilter />

      <MoviesList />
    </div>
  );
}
