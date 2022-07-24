import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getSlugs, PostMeta } from "../../components/api";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>

      <div className="mt-2 font-semibold text-orange-500 hover:text-orange-400">
        <Link href="/">← Home</Link>
      </div>

      <h1 className="mt-5 text-2xl font-bold">
        {post.meta.title}
      </h1>
      <div className="py-2">
        <span className="rounded-md bg-orange-600 text-white px-2 py-1 text-sm">
          {post.meta.veda}
        </span>
      </div>

      <article className="prose prose-h1:text-2xl prose-h2:text-xl prose-h2:text-neutral-500 prose-h3:text-lg prose-h3:text-neutral-400 prose-h3:mt-2 prose-headings:m-0 prose-img:rounded-md pt-5">
        <MDXRemote {...post.source} components={{ Image }} />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
