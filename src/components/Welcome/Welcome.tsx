import { Button } from "@/components/Button";
import styles from "./Welcome.module.scss";

export const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles["text-wrapper"]}>
          <h2>
            Üdvözlöm a <br />
            Comnica Signature-ben!
          </h2>
          <p>
            A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
            A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor
            kezdje el, ha készen áll rá.
          </p>
        </div>
        <Button>Kezdhetjük</Button>
      </div>
    </section>
  );
};
