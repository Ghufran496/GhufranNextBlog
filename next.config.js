// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ghufran",
        mongodb_password: "Allahis1",
        mongodb_clustername: "cluster0",
        mongodb_database: "NextBlogweb-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "ghufran",
      mongodb_password: "Allahis1",
      mongodb_clustername: "cluster0",
      mongodb_database: "NextBlogweb",
    },
  };
};

// module.exports = {
//   env: {
//     mongodb_username: "ghufran",
//     mongodb_password: "Allahis1",
//     mongodb_clustername: "cluster0",
//     mongodb_database: "NextBlogweb",
//   },
// };
