// next.config.js
/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/test.blog" : "",
  assetPrefix: isGithubPages ? "/test.blog/" : "",
};

export default nextConfig;
