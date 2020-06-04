import sass from "rollup-plugin-sass";
import sassRuntime from 'sass';

const componentNames = [
  'Button',
  'Drawer',
  'FloatingActionButton',
  'IconButton',
  'IconButtonToogle',
  'List',
  'TopAppBar',
];
const finalMessage = (message) => {
  return {
    name: 'final-message',
    writeBundle: ()=> {
      if(process.env.ROLLUP_WATCH){
        return;
      }
      setTimeout(()=>{
        console.log(message);
      },0);
    }
  };
}

export default [
  ...componentNames.map((componentName) => ({
    input: `src/${componentName}.scss`,
    output: {
      file: `./temp-buildjs.js`,
      format: 'es'
    },
    plugins: [
      sass({
        output: `${componentName}.css`,
        runtime: sassRuntime,
        options: {
          includePaths: ['node_modules'],
          outputStyle: 'expanded',
        }
      }),
    ],
  })),
  ...componentNames.map((componentName) => ({
    input: `src/${componentName}.scss`,
    output: {
      file: `./temp-buildjs.js`,
      format: 'es'
    },
    plugins: [
      sass({
        output: `${componentName}.min.css`,
        runtime: sassRuntime,
        options: {
          includePaths: ['node_modules'],
          outputStyle: 'compressed',
        }
      }),
    ],
  })),
  {
    input: `src/all.scss`,
    output: {
      file: `./temp-buildjs.js`,
      format: 'es'
    },
    plugins: [
      sass({
        output: `all.css`,
        runtime: sassRuntime,
        options: {
          includePaths: ['node_modules'],
          outputStyle: 'expanded',
        }
      }),
    ],
  },
  {
    input: `src/all.scss`,
    output: {
      file: `./temp-buildjs.js`,
      format: 'es'
    },
    plugins: [
      sass({
        output: `all.min.css`,
        runtime: sassRuntime,
        options: {
          includePaths: ['node_modules'],
          outputStyle: 'compressed',
        }
      }),
      finalMessage('Build completed'),
    ],
  },
];
