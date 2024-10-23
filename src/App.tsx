import { Navbar } from "@/components";
import styles from "./App.module.scss";
import { Hero } from "@/components";
import { Welcome } from "@/components";

function App() {
  return (
    <>
      <div className="background">
        <Navbar />
        <div className={styles["main-wrapper"]}>
          <div>
            <Hero />
          </div>
          <div>
            <Welcome />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
