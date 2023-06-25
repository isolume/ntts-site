const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  customDomain: 'http://think.tsukim.io',
  scriptName: 'thinking',
})

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "eg-AR"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/faq",
        destination: "/faq/getting-started",
        statusCode: 301,
      },
      {
        source: "/faq",
        destination: "/faq/getting-started",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ];
  },
  reactStrictMode: true,
});
