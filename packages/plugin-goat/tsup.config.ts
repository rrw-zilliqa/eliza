import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    sourcemap: true,
    clean: true,
    format: ["esm"], // Ensure you're targeting CommonJS
    external: [
      "dotenv", // Externalize dotenv to prevent bundling
      "crypto", // Externalize crypto to use Node.js built-in module
        "fs", // Externalize fs to use Node.js built-in module
      "path", // Externalize other built-ins if necessary
      "@zilliqa-js", // Externalise zilliqa-js else chained dynamic imports cause runtime to fail.
        "@reflink/reflink",
        "@node-llama-cpp",
        "https",
        "http",
        "agentkeepalive",
        "viem",
        "@lifi/sdk"
    ],
});
