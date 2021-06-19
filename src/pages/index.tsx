import { Background } from "@/src/components/Background";

import styles from "@/src/styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Background />

      <section className={styles.formContainer}></section>
    </main>
  );
}
