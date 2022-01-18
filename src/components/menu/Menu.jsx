//import "./menu.scss";
//import styles from "./menu.module.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  //console.log("Estos son los estilos de los menus");
  //console.log(styles);
  //let menuClass = "menu " + (menuOpen && "active");
  //let menuClass = menuOpen ? styles.active : styles.menu;
  //menuClass = styles.menuClass;
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
