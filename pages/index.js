import Topbar from "../src/components/topbar/Topbar";
import Intro from "../src/components/intro/Intro";
import Portfolio from "../src/components/portfolio/Portfolio";
import Works from "../src/components/works/Works";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "../src/components/contact/Contact";
//import Technologies2 from "./components/Technologies2.js/Technologies";
//import Technologies from "./components/Technologies/Technologies";
//import "./app.scss";
import { useState } from "react";
import Menu from "../src/components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Works /> */}
        {/* <Technologies /> */}
        {/* <Technologies2 /> */}
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
