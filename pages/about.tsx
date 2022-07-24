import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="prose prose-h1:text-2xl prose-headings:m-0 pt-5">
        <h1>About</h1>
        <p>
          The Upanishads <b>(Sanskrit: उपनिषद्)</b> are late Vedic Sanskrit
          texts of Hindu philosophy which form the foundations of Hinduism. They
          are the most recent part of the Vedas, the oldest scriptures of
          Hinduism, and deal with meditation, philosophy, and ontological
          knowledge; other parts of the Vedas deal with mantras, benedictions,
          rituals, ceremonies, and sacrifices. Among the most important
          literature in the history of Indian religions and culture, the
          Upanishads played an important role in the development of spiritual
          ideas in ancient India, marking a transition from Vedic ritualism to
          new ideas and institutions. Of all Vedic literature, the Upanishads
          alone are widely known, and their central ideas are at the spiritual
          core of Hinduism.
        </p>

        <p>
          The word Upanishad is usually interpreted as “sitting down beside.”
          This Sanskrit word can be broken down into three parts and translated
          as “upa” meaning near, “ni” as down and “shad” as to sit. Thus the
          meaning of the word confers the intent of these texts to directly
          transfer knowledge and truth from teacher to student. The collection
          of Sanskrit texts known as the Upanishads are thought to be the direct
          teachings received at the foot of the ancient Indian sages or Rishis.
        </p>
      </div>
    </>
  );
}
