import Head from "next/head";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Link href="/">
        <a className="mt-2 font-semibold text-bronze-600 hover:text-bronze-400">
          ← Home
        </a>
      </Link>

      <h1 className="mt-5 text-3xl font-bold">{post.title}</h1>

      <div className="py-2">
        <span className="px-2 py-1 text-sm text-white rounded-md bg-bronze-400">
          {post.veda}
        </span>
      </div>

      <article className="pt-5 prose prose-h1:text-2xl prose-h2:text-xl prose-h2:text-gray-400 prose-h3:text-lg prose-h3:text-bronze-500 prose-h3:mt-2 prose-headings:m-0 prose-img:rounded-md dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        <MDXContent />
      </article>
    </>
  );
};

export default PostLayout;
