import Head from "next/head";
import Script from "next/script";

export default function Main() {
  return (
    <>
      <Head>
        {/* SEO */}
        <title>Upanishad</title>
        <meta
          name="description"
          content="The Upanishads are Sanskrit texts which form the foundations of Hinduism."
        />
        <meta name="keywords" content="Upanishad, Veda" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Upanishad" />
        <meta
          property="og:description"
          content="The Upanishads are Sanskrit texts which form the foundations of Hinduism."
        />
        <meta property="og:url" content="https://upanishad.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://upanishad.io/images/share-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* favicon */}
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />

        {/* twitter */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@banagere_" name="twitter:site" />
        <meta content="@banagere_" name="twitter:creator" />

        {/* safari tab colour https://www.amitmerchant.com/get-your-website-ready-tab-bar-theming-of-safari-15/ */}
        <meta
          name="theme-color"
          content="#F8F8F8"
          media="(prefers-color-scheme: light)"
        />
      </Head>

      {/* Chiffre Script */}
      <Script
        async
        id="chiffre:analytics"
        src="https://chiffre.io/analytics.js"
        data-chiffre-project-id="YC2pypEcfFrMN9k0"
        data-chiffre-public-key="pk.gfoFTJN5ynMHN1iBOmc0U9cAGYymagJjOTNY1SuDihU"
        referrerPolicy="origin"
        crossOrigin="anonymous"
      />
    </>
  );
}
