import { Wrapper } from "@/components/Wrapper";
import styles from "./Navbar.module.scss";
import Logo from "@/assets/logo/logo.png";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Wrapper>
        <div className={styles["logo-wrapper"]}>
          <img className={styles.logo} src={Logo} alt="company logo" />
        </div>
      </Wrapper>
    </nav>
  );
};
