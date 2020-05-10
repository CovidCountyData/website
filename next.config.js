// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css');
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withVideos = require("next-videos");

const nextJsConfig = {
  exportTrailingSlash: true,
  // exportPathMap: function() {
  //     return {
  //         '/': { page: '/' },
  //         '/R': { page: '/R' },
  //         '/python': { page: '/python' },
  //         '/graphql-api': { page: '/graphql-api' },
  //         '/rest-api': { page: '/rest-api' },
  //         '/contact': { page: '/contact' },
  //         '/error': { page: '/error' },
  //         '/faq': { page: '/faq' },
  //         '/privacy-policy': { page: '/privacy-policy' },
  //         '/faq': { page: '/faq' },
  //         '/error': { page: '/error' },
  //     }
  // }
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico", "mp4"],
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  ],
//   [withCSS],
  [withFonts],
//   [withSass],
  [withVideos],
  nextJsConfig,
]);
