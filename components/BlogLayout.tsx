import { FC, useEffect } from "react";
import PageViews from "./PageViews";

interface BlogLayoutProps {
  slug: string;
}

const BlogLayout: FC<BlogLayoutProps> = ({ slug }) => {
  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: "POST",
    });
  }, [slug]);

  return (
    <div>
      <h1>{slug}</h1>
      <div>
        <PageViews slug={slug} />
      </div>
    </div>
  );
};

export default BlogLayout;
