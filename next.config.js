// The production site is served by Vercel at the domain root
// (https://marcellinus.vitroweb.online), so the base path must stay empty
// there. The optional GitHub Pages mirror is a project site served from
// /web-profile-next, so it is built separately with NEXT_PUBLIC_BASE_PATH set
// (see the `build:gh` script in package.json).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
