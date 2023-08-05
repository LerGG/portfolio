/**
 * NextFont requires SWC compiler rather then babel!
 */

/* eslint-disable */
module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    ENDPOINT_GETFORM_IO: process.env.ENDPOINT_GETFORM_IO,
    GOOGLE_RECAPTCHA_PUBLIC_KEY: process.env.GOOGLE_RECAPTCHA_PUBLIC_KEY,
    GOOGLE_RECAPTCHA_PRIVATEC_KEY: process.env.GOOGLE_RECAPTCHA_PRIVATE_KEY,
  },
  images: {
    domains: ["images.ctfassets.net"],
    minimumCacheTTL: 2592000, // 1 month
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: false,
    },
  },
};
