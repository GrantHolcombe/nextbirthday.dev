const site_config = {
  title: "Next Wedding",
  author: "Tony",
  header_title: "nextwedding",
  description: "A wedding website.",
  language: "en-us",
  theme: "light", // system, dark or light
  site_url: process.env.SITE_URL,
  site_logo: "/static/images/tk_logo_big.png",
  site_image: "/static/images/engagement3.jpg",
  // email: '@tonybanters.com',
  locale: "en-US",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
};

module.exports = site_config;
