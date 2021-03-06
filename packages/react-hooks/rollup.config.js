import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";

const minify = process.env.MINIFY === undefined || process.env.MINIFY === true;

const tsconfigExcludeBuild = [
  ...tsconfig.exclude,
  "src/**/*.test.tsx",
];

const pluginTypescriptDeclarationNoEmit = typescript({
  tsconfigOverride: {
    exclude: tsconfigExcludeBuild,
    compilerOptions: {
      declaration: false,
      noEmit: true,
    }
  },
});
const pluginTypescriptDeclarationEmit = typescript({
  tsconfigOverride: {
    exclude: tsconfigExcludeBuild,
    compilerOptions: {
      declaration: true,
      declarationDir: 'dist/',
    }
  },
});
const pluginsMinify = (minify?[terser()]:[]);
export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      pluginTypescriptDeclarationEmit,
      commonjs(),
      ...pluginsMinify,
    ]
  },
];
