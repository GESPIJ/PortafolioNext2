import "../styles/globals.css";
//import "./app.scss";
import "./app.scss";
import "../src/components/testimonials/testimonials.scss";
import "../src/components/topbar/topbar.scss";
import "../src/components/menu/menu.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
