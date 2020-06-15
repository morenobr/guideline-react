import fs from 'fs';
import path from 'path';
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
const externals = ["react", "react-dom","@morenobr/guideline-react-hooks"];

const getComponentNames = ()=>{
  const componentsDir = path.resolve(__dirname, 'src');
  return fs.readdirSync(componentsDir)
    .filter(p => fs.lstatSync(path.resolve(componentsDir, p)).isDirectory())
    .filter(p => p !== 'helpers');
}
const componentNames = getComponentNames();

const isLibExternal = (id)=> {
  const regexExternalsEquals = new RegExp(
    "^(" + externals.map(e => e.replace('/', '\\/')).join("|") + ")$"
  );
  const regexExternalsBegins = new RegExp(
    "^(" + externals.map(e => e.replace('/', '\\/')).join("|") + ")"
  );
  return regexExternalsEquals.test(id) || regexExternalsBegins.test(id);
}
const isComponentExternal = (id)=>{
  const regexComponents = new RegExp(
    "^(\\.\\.\\/)+(" + componentNames.join("|") + ")$"
  );
  return regexComponents.test(id);
}
const isHelpersExternal = (id)=>/^(\.\.\/)+helpers/.test(id);

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
      declarationDir: '.',
    }
  },
});
const pluginsMinify = (minify?[terser()]:[]);
export default [
  ...componentNames.map((componentName) => ({
    input: `src/${componentName}/index.ts`,
    output: [
      {
        file: `./${componentName}/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: (id) => (isLibExternal(id) || isComponentExternal(id) || isHelpersExternal(id)),
    plugins: [
      peerDepsExternal(),
      resolve(),
      pluginTypescriptDeclarationNoEmit,
      commonjs(),
      ...pluginsMinify,
    ],
  })),
  {
    input: "src/helpers/index.ts",
    output: [
      {
        file: `./helpers/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: (id) => isLibExternal(id),
    plugins: [
      peerDepsExternal(),
      resolve(),
      pluginTypescriptDeclarationNoEmit,
      commonjs(),
      ...pluginsMinify,
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: () => true,
    plugins: [
      peerDepsExternal(),
      resolve(),
      pluginTypescriptDeclarationNoEmit,
      commonjs(),
      ...pluginsMinify,
    ],
  },
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: id => isLibExternal(id),
    plugins: [
      peerDepsExternal(),
      resolve(),
      pluginTypescriptDeclarationEmit,
      commonjs(),
      ...pluginsMinify,
    ]
  },
];
