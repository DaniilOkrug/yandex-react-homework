import { Footer, Header } from "@/components/modules";

import styles from "./teamplate.module.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className={styles.container}>{children}</main>

      <Footer />
    </>
  );
}
