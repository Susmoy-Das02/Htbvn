import Footer from "../components/client/layouts/Footer";
import Header from "../components/client/layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
