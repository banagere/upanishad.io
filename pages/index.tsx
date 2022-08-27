import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { pick } from "contentlayer/client";

export async function getStaticProps() {
  const sortedPosts = allPosts.sort((a, b) => {
    if (a.weight > b.weight) return 1;
    if (a.weight < b.weight) return -1;
    return 0;
  });

  const posts = sortedPosts.map((post) =>
  pick(post, ["url", "title", "veda"])
  )

  return { props: { posts } };
}

function PostCard(post: Post) {
  return (
    <>
      <ul className="flex flex-col gap-1">
        <li className="py-px">
          <Link href={post.url}>
            <a className="text-2xl font-bold hover:text-bronze-500">
              {post.title}
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <div className="max-w-3xl px-4 mx-auto">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
