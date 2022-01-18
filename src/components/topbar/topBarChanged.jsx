//import "./topbar.scss";
//import styles from "./topbar.module.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  let activeClass = "topbar " + (menuOpen && "active");
  //activeClass = styles.activeClass;
  activeClass = menuOpen ? styles.active : styles.topbar;
  //"topbar active" : "topbar false";
  //activeClass = menuOpen ? styles.topbar.active : styles.topbar.false;
  console.log(activeClass);
  console.log("Estos son los estilos de la TopBar");
  console.log(styles);
  return (
    <div className={activeClass}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro" className={styles.logo}>
            {/* genius. */}
            Developer
          </a>
          <div className={styles.itemContainer}>
            <Person className={styles.icon} />
            {/* <span>+44 924 12 74</span> */}
            <span>+58 424 183 3510</span>
          </div>
          <div className={styles.itemContainer}>
            <Mail className={styles.icon} />
            {/* <span>safak@genius.com</span> */}
            <span>gregspinetti@gmail.com</span>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
