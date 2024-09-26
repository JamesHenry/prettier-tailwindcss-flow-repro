# Reproduction

1. `npm install`
2. `node script.cjs` for the commonjs implementation
3. `node script.mjs` for the ESM implementation

ESM vs CJS doesn't matter, both exhibit the same behavior.

The presence of `prettier-plugin-tailwindcss` is key, through it's dependency on the flow parser, it is somehow causing all subsequent errors to be processed by `prettier/plugins/flow.mjs`, which then dumps contents from that minified file to the console.
