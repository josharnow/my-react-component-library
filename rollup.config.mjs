import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// To handle css files
import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';

import preserveDirectives from "rollup-plugin-preserve-directives"; // https://github.com/rollup/rollup/issues/4699#issuecomment-1465302665

import packageJson from "./package.json" assert { type: "json" };
// const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        // dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
        // preserveModules: true,
      },
      {
        // file: packageJson.module,
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      preserveDirectives({ suppressPreserveModulesWarning: false, exclude: ["**/*.scss", "**/*.pcss"] }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),

      terser(),
      image()
    ],
  },
  {
    // input: "dist/esm/src/index.js",
    // input: "dist/esm/index.d.ts",
    input: "dist/esm/types/index.d.ts",
    // output: [{ dir: "dist", format: "esm" }],
    // output: [{ file: "dist/index.d.ts", format: "esm", preserveModules: true, }],
    // NOTE - https://github.com/rollup/plugins/issues/1230#issuecomment-1324735742
    output: [{ dir: "dist", format: "esm", preserveModules: true, }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports 
  },
]