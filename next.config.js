const path = require("path");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCss(
  withSass({
    target: "serverless",
    webpack(config) {
      config.resolve.alias["src"] = path.join(__dirname, "src");
      config.resolve.alias["apis"] = path.join(__dirname, "src/apis");
      config.resolve.alias["components"] = path.join(
        __dirname,
        "src/components"
      );
      config.resolve.alias["containers"] = path.join(
        __dirname,
        "src/containers"
      );
      config.resolve.alias["scss"] = path.join(__dirname, "src/scss");
      config.resolve.alias["store"] = path.join(__dirname, "src/store");

      return config;
    }
  })
);
