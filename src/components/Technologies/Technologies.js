import { useEffect, useState } from "react";
//import "./Technologies2.css";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

//import PortfolioList from "../portfolioList/PortfolioList";
//import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from "../../data";

export default function Portfolio() {
  //const [selected, setSelected] = useState("featured");
  //const [data, setData] = useState([]);
  //   const list = [
  //     {
  //       id: "featured",
  //       title: "Featured",
  //     },
  //     {
  //       id: "web",
  //       title: "Web App",
  //     },
  //     {
  //       id: "mobile",
  //       title: "Mobile App",
  //     },
  //     {
  //       id: "educational",
  //       title: "Educational",
  //     },

  //   ];

  //   useEffect(() => {
  //     switch (selected) {
  //       case "featured":
  //         setData(featuredPortfolio);
  //         break;
  //       case "web":
  //         setData(webPortfolio);
  //         break;
  //       case "mobile":
  //         setData(mobilePortfolio);
  //         break;
  //       case "design":
  //         setData(designPortfolio);
  //         break;
  //       case "content":
  //         setData(contentPortfolio);
  //         break;
  //       default:
  //         setData(featuredPortfolio);
  //     }
  //   }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Tecnologías</h1>
      <p
        className="fplon"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "32px",
        }}
      >
        He trabajo diversas tecnologías en el mundo del desarrollo de
        aplicaciones web o móviles. Desde el front-end al back-end.
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50%",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="skillContainer"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            {/* <DiReact style={{ height: "15px", width: "15px" }} /> */}
          </div>

          <div className="titleStyle">Front-End</div>
          <div
            style={{
              height: "100%",
            }}
          >
            <div className="skillsStyle">
              <img
                className="skillReact"
                alt="Nothing"
                src="/assets/reactLogo.png"
                height="20px"
                width="20px"
              />

              <span
                style={
                  {
                    //width: "90px"
                  }
                }
              >
                React
              </span>
            </div>

            <div className="skillsStyle">
              <img
                className="skillIcon"
                alt="Nothing"
                src="/assets/vueLogo.png"
                height="20px"
                width="20px"
              />
              <span style={{ width: "90px" }}>VUE</span>
            </div>
            <div className="skillsStyle">
              <img
                style={{
                  height: "20px",
                }}
                className="skillIcon"
                alt="Nothing"
                src="/assets/javascriptLogo.png"
                height="20px"
                width="20px"
              />
              <span style={{ width: "90px" }}>JavaScript</span>
            </div>

            <div className="skillsStyle">
              <img
                className="skillCss"
                style={
                  {
                    // width: "19px",
                    // height: "20px",
                  }
                }
                // className="skillIcon"
                alt="Nothing"
                src="/assets/cssLogo.png"
                height="20px"
                width="20px"
              />
              <span style={{ width: "90px" }}>CSS</span>
            </div>
          </div>
        </div>
        <div
          className="skillContainer"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>{/* <DiFirebase /> */}</div>

          <div className="titleStyle">Back-end </div>
          <div
            style={{
              height: "100%",
            }}
          >
            <div className="skillsStyle">
              <img
                //className="skillIcon"
                style={
                  {
                    // width: "40px",
                    // height: "17px",
                  }
                }
                className="skillStyleNode"
                alt="Nothing"
                src="/assets/nodejsLogo.png"
                //height="40px"
                //width="40px"
                //height="17px"
              />
              <span style={{ width: "90px" }}>Node</span>
            </div>

            <div className="skillsStyle">
              <img
                style={
                  {
                    // height: "19px",
                  }
                }
                className="skillStyleLaravel"
                alt="Nothing"
                src="/assets/LaravelLogo.png"
                height="20px"
                width="30px"
              />
              <span style={{ width: "90px" }}>Laravel</span>
            </div>

            <div className="skillsStyle">
              {/* <p className="skillText">Python</p> */}
              <img
                style={
                  {
                    // height: "20px",
                  }
                }
                className="skillPython"
                alt="Nothing"
                src="/assets/pythonLogo.png"
                height="20px"
                width="30px"
              />
              <span style={{ width: "90px" }}>Python</span>
            </div>

            <div className="skillsStyle">
              <img
                style={
                  {
                    // height: "20px",
                  }
                }
                className="skillFirebase"
                alt="Nothing"
                src="/assets/fireBaseLogo_Resized.png"
                //height="20px"
                //width="30px"
              />
              <span style={{ width: "90px" }}>Firebase</span>
            </div>
          </div>
        </div>
        <div
          className="skillContainer"
          //className="titleStyle"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>{/* <DiZend /> */}</div>
          <div className="titleStyle">Mobile</div>
          <div
            style={{
              height: "100%",
            }}
          >
            <div className="skillsStyle">
              <img
                style={{
                  width: "35px",
                }}
                className="skillIcon"
                src="/assets/flutterLogo.png"
                alt="Logo de flutter"
                height="20px"
                width="20px"
              />
              <span style={{ width: "90px" }}>Flutter</span>
            </div>
          </div>
        </div>
      </div>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      {/* <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}
