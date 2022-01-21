import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
//import "./portfolio.scss";
import Image from "next/image";
//import styles from "./portfolio.module.scss";
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

  //console.log("Estos son los estilos de portfolio");
  //console.log(styles);
  return (
    <div className="portfolio" id="portfolio">
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
      <div className="container">
        {!showingProject ? (
          data.map((d) => (
            <div
              key={d.id}
              className="item"
              onClick={
                d.link
                  ? () => {
                      //window.location.href = d.link;
                      setselectedProject(d);
                      setshowingProject(true);
                    }
                  : () => {
                      //setselectedProject(true);
                      setselectedProject(d);
                      setshowingProject(true);
                    }
              }
            >
              <Image src={d.img} width={440} height={250} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))
        ) : (
          <div>
            <div style={{ width: "100%", height: "100%" }}>
              <h3 style={{ textAlign: "center" }}>{selectedProject.titulo}</h3>
              <div className="individualProjectContainer">
                <Image
                  //style={{borderRadius:""}}
                  // width="60%"
                  // height="60%"
                  width={440}
                  height={250}
                  alt="Imagen"
                  src={selectedProject.img}
                />
                <div
                //style={{ width: "40%", height: "40%" }}
                >
                  <p style={{ textAlign: "justify" }}>
                    {selectedProject.descripcion}
                  </p>
                  <br />
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      // justifyContent: "center",
                    }}
                  >
                    <button
                      style={{
                        opacity: selectedProject.link ? "1" : "0.6",
                      }}
                      onClick={() => {
                        if (selectedProject.link) {
                          window.location.href = selectedProject.link;
                        }
                      }}
                    >
                      Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
