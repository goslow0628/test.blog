// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/test.blog",
  assetPrefix: "/test.blog",
};

module.exports = {
  images: {
    unoptimized: true,
  },
  output: "export", // 정적 export 용
};
