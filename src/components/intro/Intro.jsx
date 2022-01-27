//import "./intro.scss";
//import styles from "./intro.module.scss";
import Image from "next/image";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import profilePci from "../../../public/assets/Foto_Graduacion_square.jpg";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Desarrollador"],
    });

    //console.log("Estos son los estilos");
    //console.log(styles);
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <Image
            className="imagenContenedorIntro"
            //layout={"fill"}
            //src="/assets/Foto_Graduacion_square.jpg"
            src={profilePci}
            //src="/assets/man.png"
            //alt="Imagen"
            //width={700}
            //height={700}
          />
          {/* <img src="assets/Foto_Graduacion_square.jpg" alt="" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hola, soy</h2>
          <h1>Greg Spinetti</h1>
          <h3>
            Programador <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          {/* <img src="assets/down.png" alt="" /> */}
          <Image src="/assets/down.png" alt="Nada" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
