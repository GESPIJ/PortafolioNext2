//import "./intro.scss";
//import styles from "./intro.module.scss";
import Image from "next/image";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer"],
    });

    //console.log("Estos son los estilos");
    //console.log(styles);
  }, []);

  return (
    <div className={styles.intro} id="intro">
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/Foto_Graduacion_square.jpg"
            alt="Imagen"
            width={700}
            height={700}
          />
          {/* <img src="assets/Foto_Graduacion_square.jpg" alt="" /> */}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2>Hi There, I'm</h2>
          <h1>Greg Spinetti</h1>
          <h3>
            Programmer <span ref={textRef}></span>
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
