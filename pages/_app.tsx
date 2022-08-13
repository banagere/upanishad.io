import Head from "../components/Head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "library/main.scss"
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
