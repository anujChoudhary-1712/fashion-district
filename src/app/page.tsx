
import Hero from "@/components/Home/Hero";
import styles from "./page.module.scss";
import TopCollections from "@/components/Home/TopCollections";

export default function Home() {
  return (
    <main className={styles.main}>
     <Hero />
     <TopCollections />
    </main>
  );
}
