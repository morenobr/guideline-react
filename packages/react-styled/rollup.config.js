import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss'
import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";

const minify = process.env.MINIFY === undefined || process.env.MINIFY === true;

const externals = ["react", "react-dom","@morenobr/guideline-react-hooks","@morenobr/guideline-react"];
const isLibExternal = (id)=> {
  const regexExternalsEquals = new RegExp(
    "^(" + externals.map(e => e.replace('/', '\\/')).join("|") + ")$"
  );
  const regexExternalsBegins = new RegExp(
    "^(" + externals.map(e => e.replace('/', '\\/')).join("|") + ")"
  );
  return regexExternalsEquals.test(id) || regexExternalsBegins.test(id);
}

const tsconfigExcludeBuild = [
  ...tsconfig.exclude,
  "src/**/*.test.tsx",
  "src/**/*.stories.tsx",
];
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
    external: (id) => isLibExternal(id),
    plugins: [
      postcss(),
      peerDepsExternal(),
      resolve(),
      pluginTypescriptDeclarationEmit,
      commonjs(),
      ...pluginsMinify,
    ]
  },
];
