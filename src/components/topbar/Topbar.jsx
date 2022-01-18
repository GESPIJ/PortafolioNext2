//import "./topbar.scss";
//import styles from "./topbar.module.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  //let activeClass = "topbar " + (menuOpen && "active");
  //activeClass = styles.activeClass;
  // activeClass = menuOpen ? styles.active : styles.topbar;
  //"topbar active" : "topbar false";
  //activeClass = menuOpen ? styles.topbar.active : styles.topbar.false;

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {/* genius. */}
            Developer
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            {/* <span>+44 924 12 74</span> */}
            <span>+58 424 183 3510</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            {/* <span>safak@genius.com</span> */}
            <span>gregspinetti@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
