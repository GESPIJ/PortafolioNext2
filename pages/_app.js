import "../styles/globals.css";
//import "./app.scss";
import "./app.scss";
import "../src/components/testimonials/testimonials.scss";
import "../src/components/topbar/topbar.scss";
import "../src/components/menu/menu.scss";
import "../src/components/intro/intro.scss";
import "../src/components/portfolio/portfolio.scss";
import "../src/components/portfolioList/portfolioList.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
