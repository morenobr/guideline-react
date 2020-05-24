import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import sass from "rollup-plugin-sass";
import { terser } from "rollup-plugin-terser";

import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";

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
  // {
  //   include: ['node_modules/**'],
  //   namedExports: {
  //     'node_modules/react/react.js': [
  //       'Children',
  //       'Component',
  //       'PropTypes',
  //       'createElement'
  //     ],
  //     'node_modules/react-dom/index.js': ['render']
  //   }
  // }
  sass({
    insert: true,
  }),
  terser(),
];
const dirCjs = tsconfig.compilerOptions.declarationDir;
const externals = ["react", "react-dom"];
const componentNames = ["TestComponent"];
const externalComponent = (id) => {
  const regexExternals = new RegExp(
    "^(\\.\\.\\/)+(" + externals.join("|") + ")$"
  );
  const regexComponents = new RegExp(
    "^(\\.\\.\\/)+components\\/(" + componentNames.join("|") + ")$"
  );
  const regexComponentsStyled = new RegExp(
    "^(\\.\\.\\/)+componentsStyled\\/(" + componentNames.join("|") + ")$"
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
    input: `src/components/${componentName}/index.ts`,
    output: [
      {
        file: `${dirCjs}/components/${componentName}/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: externalComponent,
    plugins: pluginsComponents,
  })),
  ...componentNames.map((componentName) => ({
    input: `src/componentsStyled/${componentName}.tsx`,
    output: [
      {
        file: `${dirCjs}/componentsStyled/${componentName}.js`,
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
