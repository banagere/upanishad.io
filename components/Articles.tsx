import Link from "next/link";
import type { PostMeta } from "../components/api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <ul className="flex flex-col gap-1">
        {posts.map((post) => (
          <li className="py-px" key={post.slug}>
            <span className="text-lg font-bold hover:text-orange-400">
              <Link href={`/note/${post.slug}`}>{post.title}</Link>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
