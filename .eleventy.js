const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const rollupPlugin = require("eleventy-plugin-rollup");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rollupPlugin, {
    rollupOptions: {
      output: {
        format: "es",
        dir: "_site/js",
        sourcemap: process.env.NETLIFY !== "true",
      },
    },
  });
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "possum", // The serverless function name from your permalink object
    functionsDir: "./netlify/functions/",
  });
  // Return your Object options:
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
