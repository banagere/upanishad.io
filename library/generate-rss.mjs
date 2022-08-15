import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/Post/_index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Upanishad',
    site_url: 'https://upanishad.io',
    feed_url: 'https://upanishad.io/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://upanishad.io/u/${post.url}`,
      veda: post.veda
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
