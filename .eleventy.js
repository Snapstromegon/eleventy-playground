const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("cwd", () => process.cwd());

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
