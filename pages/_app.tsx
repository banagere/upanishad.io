import type { AppProps } from "next/app";
import Head from "../components/Head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../library/main.scss";
import { MDXProvider } from "@mdx-js/react";

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
