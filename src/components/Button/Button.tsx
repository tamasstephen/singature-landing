import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
};
