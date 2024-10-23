import styles from "./Hero.module.scss";
import Illustration from "@/assets/background/laptop.webp";

export const Hero = () => {
  return (
    <section className={styles["hero-wrapper"]}>
      <div className={styles.first}>
        <h1>Comnica Signature</h1>
        <p>Digitális aláíró szolgáltatás a Comnicától</p>
      </div>
      <div className={styles.second}>
        <img
          src={Illustration}
          className={styles.image}
          alt="laptop with coffe"
        />
      </div>
    </section>
  );
};
