module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
      {
        protocol: 'https',
        hostname: 'vishnya-strapi-stage.cap.catster.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.vishnyaproperties.com',
        port: '',
      },
    ],
  },
};
