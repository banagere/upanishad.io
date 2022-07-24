import { getAllPosts, PostMeta } from "../components/api";
import Articles from "../components/Articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4">
        <Articles posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}
