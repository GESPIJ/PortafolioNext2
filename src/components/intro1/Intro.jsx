import "./intro.scss";
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
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            alt=""
            //src="assets/man.png"
            src="/assets/Foto_Graduacion.jpg"
            width={700}
            height={700}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Greg Spinetti</h1>
          <h3>
            Programmer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/assets/down.png" alt="" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
