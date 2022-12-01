/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "cutt.ly"],
  },
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
