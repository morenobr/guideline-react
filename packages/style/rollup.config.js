import path from 'path';
import fs from 'fs';
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

const licenseTextToCssCommentLines = (licenseText) =>licenseText.split("\n").map(l => " *"+(l?' ':'')+l).join("\n");

const addAllLicensesToCss = ({fileCss})=>{
  return {
    name: 'add-all-licenses-to-css',
    writeBundle: (options, bundle) => {
      const contentFileCss = fs.readFileSync(fileCss).toString();
      if(contentFileCss){
        const fileLicenseMaterialDesign = path.resolve(__dirname, 'src', 'ALL_MATERIAL_DESIGN_LICENSE')
        const contentFileLicenseMaterialDesign = licenseTextToCssCommentLines(fs.readFileSync(fileLicenseMaterialDesign).toString());
        const fileLicenseProject = path.resolve(__dirname, 'LICENSE')
        const contentFileLicenseProject = licenseTextToCssCommentLines(fs.readFileSync(fileLicenseProject).toString());
        const contentLicense = contentFileLicenseMaterialDesign+"\n"+licenseTextToCssCommentLines("\n---------------------------------------\n\nOthers have the following license:\n")+"\n"+contentFileLicenseProject;
        const licenseToCss = "/*\n"+contentLicense+"\n */\n";
        fs.writeFileSync(fileCss, licenseToCss+contentFileCss);
      }
    }
  }
}
const addLicenseToCss = ({fileCss, fileLicense})=>{
  return {
    name: 'add-license-to-css',
    writeBundle: (options, bundle) => {
      const contentFileCss = fs.readFileSync(fileCss).toString();
      if(contentFileCss){
        const contentFileLicense = fs.readFileSync(fileLicense).toString();
        const licenseToCss = "/*\n"+licenseTextToCssCommentLines(contentFileLicense)+"\n */\n";
        fs.writeFileSync(fileCss, licenseToCss+contentFileCss);
      }
    }
  }
}
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
    input: `src/${componentName}/${componentName}.scss`,
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
      addLicenseToCss({
        fileCss: path.resolve(__dirname, `${componentName}.css`), 
        fileLicense: path.resolve(__dirname, 'src', componentName, 'LICENSE')
      })
    ],
  })),
  ...componentNames.map((componentName) => ({
    input: `src/${componentName}/${componentName}.scss`,
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
      addLicenseToCss({
        fileCss: path.resolve(__dirname, `${componentName}.min.css`), 
        fileLicense: path.resolve(__dirname, 'src', componentName, 'LICENSE')
      })
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
      addAllLicensesToCss({
        fileCss: path.resolve(__dirname, `all.css`), 
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
      addAllLicensesToCss({
        fileCss: path.resolve(__dirname, `all.min.css`), 
      }),
      finalMessage('Build completed'),
    ],
  },
];
