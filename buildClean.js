const fs = require('fs');
const path = require('path');

const getComponentNames = ()=>{
  const componentsDir = path.resolve(__dirname, 'src', 'unstyled');
  return fs.readdirSync(componentsDir)
    .filter(p => fs.lstatSync(path.resolve(componentsDir, p)).isDirectory());
}
const componentNames = getComponentNames();

const regexComponentsOnRoot = new RegExp('^('+componentNames.join('|')+')$');
const fileDirList = fs.readdirSync('.');
fileDirList.forEach(fileOrDir => {
  if(/^index/.test(fileOrDir)){
    fs.unlinkSync(fileOrDir);
  }
  if(/^unstyled$/.test(fileOrDir)){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
  if(regexComponentsOnRoot.test(fileOrDir)){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
  if(/^styles$/.test(fileOrDir)){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
  if(/^hooks$/.test(fileOrDir)){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
});
