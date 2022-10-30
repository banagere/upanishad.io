import "library/main.scss";
import Layout from "components/layout";
import { AppProps } from "next/app";
import * as config from "../lib/config";
import { defaultSeo } from "../lib/config/seo";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonical = `${config.baseUrl}${
    router.pathname === "/" ? "" : router.pathname
  }/`;

  return (
    <>
      <DefaultSeo
        {...defaultSeo}
        canonical={canonical}
        openGraph={{
          ...defaultSeo.openGraph,
          url: canonical,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
