import fs from 'fs';
import path from 'path';
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import sass from "rollup-plugin-sass";
import sassRuntime from 'sass';
import { terser } from "rollup-plugin-terser";

import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";

const minify = true;

const getComponentNames = ()=>{
  const componentsDir = path.resolve(__dirname, 'src', 'unstyled');
  return fs.readdirSync(componentsDir)
    .filter(p => fs.lstatSync(path.resolve(componentsDir, p)).isDirectory());
}

const plugins = (tsconfigOverride) => [
  peerDepsExternal(),
  resolve(),
  typescript({
    tsconfigOverride: {
      exclude: [
        ...tsconfig.exclude,
        "src/**/*.test.tsx",
        "src/**/*.stories.tsx",
      ],
      ...tsconfigOverride,
    },
  }),
  commonjs(),
  sass({
    runtime: sassRuntime,
    options: {
      includePaths: ['node_modules'],
      outputStyle: minify?'compressed':'expanded',
    }
  }),
  ...(minify?[terser()]:[]),
];
const dirCjs = tsconfig.compilerOptions.declarationDir;
const externals = ["react", "react-dom"];
const componentNames = getComponentNames();
const externalComponent = (id) => {
  const regexExternals = new RegExp(
    "^(\\.\\.\\/)+(" + externals.join("|") + ")$"
  );
  const regexComponents = new RegExp(
    "^(\\.\\.\\/)+unstyled\\/(" + componentNames.join("|") + ")$"
  );
  const regexComponentsStyled = new RegExp(
    "^(\\.\\.\\/)+(" + componentNames.join("|") + ")$"
  );
  if (
    regexExternals.test(id) ||
    regexComponents.test(id) ||
    regexComponentsStyled.test(id)
  ) {
    return true;
  }
  return false;
};
const pluginsComponents = plugins({
  compilerOptions: {
    declaration: false,
    noEmit: true,
  }
});
export default [
  ...componentNames.map((componentName) => ({
    input: `src/unstyled/${componentName}/index.ts`,
    output: [
      {
        file: `${dirCjs}/unstyled/${componentName}/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: externalComponent,
    plugins: pluginsComponents,
  })),
  {
    input: "src/unstyled/index.ts",
    output: [
      {
        file: `${dirCjs}/unstyled/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: () => true,
  },
  ...componentNames.map((componentName) => ({
    input: `src/${componentName}/index.ts`,
    output: [
      {
        file: `${dirCjs}/${componentName}/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: externalComponent,
    plugins: pluginsComponents,
  })),
  ...componentNames.map((componentName) => ({
    input: `src/styles/${componentName}.scss`,
    output: {
      file: `${dirCjs}/index.js`,//Replaced by next cjs build
      format: 'es'
    },
    plugins: [
      sass({
        output: `styles/${componentName}.css`,
        runtime: sassRuntime,
        options: {
          includePaths: ['node_modules'],
          outputStyle: minify?'compressed':'expanded',
        }
      }),
    ],
  })),
  {
    input: "src/index.ts",
    output: [
      {
        file: `${dirCjs}/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: () => true,
    plugins: plugins({
      compilerOptions: {
        declaration: true,
        declarationDir: dirCjs,
      }
    }),
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
    plugins: plugins({
      compilerOptions: {
        declaration: false,
      }
    }),
  },
];
