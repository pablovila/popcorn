const path = require("path");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCss(
  withSass({
    target: "serverless",
    webpack(config) {
      config.resolve.alias["@"] = path.join(__dirname, "src");
      return config;
    }
  })
);
