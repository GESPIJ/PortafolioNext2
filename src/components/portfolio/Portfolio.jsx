import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
//import "./portfolio.scss";
import Image from "next/image";
import styles from "./portfolio.module.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [selectedProject, setselectedProject] = useState(null);
  const [showingProject, setshowingProject] = useState(false);
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  console.log("Estos son los estilos de portfolio");
  console.log(styles);
  return (
    <div className={styles.portfolio} id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            //setselectedProject={setselectedProject}
            setshowingProject={setshowingProject}
          />
        ))}
      </ul>
      <div className={styles.container}>
        {!showingProject ? (
          data.map((d) => (
            <div key={d.id} className={styles.item}>
              <Image
                src={d.img}
                width={440}
                height={250}
                onClick={
                  d.link
                    ? () => {
                        window.location.href = d.link;
                      }
                    : () => {
                        //setselectedProject(true);
                        setselectedProject(d);
                        setshowingProject(true);
                      }
                }
                alt=""
              />
              <h3>{d.title}</h3>
            </div>
          ))
        ) : (
          <div>
            <div style={{ width: "100%", height: "100%" }}>
              <h3>{selectedProject.titulo}</h3>
              <div>
                <Image
                  // width="60%"
                  // height="60%"
                  width={440}
                  height={250}
                  alt="Imagen"
                  src={selectedProject.img}
                />
                <div style={{ width: "40%", height: "40%" }}>
                  <span>{selectedProject.descripcion}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
