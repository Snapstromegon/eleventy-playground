const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const { readdirSync } = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("cwd", () => process.cwd());
  eleventyConfig.addShortcode("dir", (path) => readdirSync(path).join("<br>"));

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
