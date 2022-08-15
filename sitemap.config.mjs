/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://upanishad.io",
  generateRobotsTxt: true,
};

export default config;
