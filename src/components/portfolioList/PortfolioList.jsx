//import "./portfolioList.scss";
import styles from "./portfolioList.module.scss";

export default function PortfolioList({
  id,
  title,
  active,
  setSelected,
  setselectedProject,
  setshowingProject,
}) {
  let activeClass = active ? styles.another_style : styles.portfolioList;
  console.log("Estos son los estilos de portfolio list");
  console.log(styles);
  return (
    <li
      className={activeClass}
      onClick={() => {
        setshowingProject(false);
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
}
