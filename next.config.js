// // /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// const withPWA = require("next-pwa");

// module.exports = nextConfig

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     disable: process.env.NODE_ENV === "development",
//     skipWaiting: true,
//   },
// });

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
    // next config
});
module.exports = nextConfig;