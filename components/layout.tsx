import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

interface Props {
  children?: React.ReactNode;
}

// const Layout = ({ children }: Props) => {}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        {/* safari tab colour https://www.amitmerchant.com/get-your-website-ready-tab-bar-theming-of-safari-15/ */}
        <meta
          name="theme-color"
          content="#F8F8F8"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      {/* Goatcounter Script */}
      <Script
        data-goatcounter="https://upanishad.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />

      <div className="flex flex-col h-screen">
        <header className="mx-auto py-7 text-center">
          <Link
            href="/"
            passHref
            className="hover:text-bronze-400 font-extrabold text-3xl "
          >
            Upanishad
          </Link>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="py-8 mx-auto">
          <hr className="w-56 mx-auto border-bronze-300 border-1" />
          <div className="pt-3 text-sm font-semibold text-center text-gray-500">
            <Link
              href="/about"
              className="tracking-widest uppercase hover:text-bronze-500"
            >
              About
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
