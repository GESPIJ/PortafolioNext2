import Topbar from "../src/components/topbar/Topbar";
import Intro from "../src/components/intro/Intro";
import Portfolio from "../src/components/portfolio/Portfolio";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "../src/components/contact/Contact";
import Technologies from "../src/components/Technologies/Technologies";
import { useState } from "react";
import Menu from "../src/components/menu/Menu";
import Head from "next/head";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Technologies />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
