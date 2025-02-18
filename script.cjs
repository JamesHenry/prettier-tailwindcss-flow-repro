const { join } = require("node:path");
const prettier = require("prettier");

(async () => {
  const options = {
    // The exact file doesn't matter, it's the plugin that's the issue
  filepath: join(__dirname, "package.json"),
    // Comment out the plugins to fix the issue, it must be because of the plugin loading the flow parser
    plugins: ["prettier-plugin-tailwindcss"],
  };

  // Other prettier methods do not trigger the error, it' specifically format (but obviously that's the most important)
  await prettier.format("{}", options);

  // ANY error thrown ANYWHERE after the format call ends up being processed by /node_modules/prettier/plugins/flow.mjs
  // ...which then dumps contents from that minified file to the console
  throw new Error("test");
})();
