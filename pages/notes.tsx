import Head from "next/head";

export default function Notes() {
  return (
    <>
      <Head>
        <title>Release Notes</title>
      </Head>

      <div className="prose prose-h1:text-2xl prose-h2:text-xl prose-h2:mt-3 prose-h2:text-bronze-500 prose-h3:text-lg prose-h3:text-bronze-500 prose-h3:mt-2 prose-headings:m-0 prose-img:rounded-md pt-5">
        <h1>Release Notes</h1>

        <h2>July 24, 2022</h2>
        <p>Moved from Hugo to Next.js</p>

        <h2>Sep 10, 2021</h2>
        <p>Ekakshara Upanishad</p>

        <h2>Sep 05, 2021</h2>
        <p>Isavasya Upanishad</p>

        <h2>Aug 29, 2021</h2>
        <p>Aitareya Upanishad</p>

        <h2>Aug 26, 2021</h2>
        <p>
          <b>First Build</b>
        </p>
      </div>
    </>
  );
}
