import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm"],
  treeshake: true,
  clean: true,
  dts: true,
  fixedExtension: false,
  outExtensions: () => ({
    js: ".js",
    dts: ".d.ts",
  }),
});
