const fs = require('fs');
const path = require('path');

const getComponentNames = ()=>{
  const componentsDir = path.resolve(__dirname, 'src');
  return fs.readdirSync(componentsDir)
    .filter(p => fs.lstatSync(path.resolve(componentsDir, p)).isDirectory())
    .filter(p => p !== 'helpers');
}
const componentNames = getComponentNames();

const regexComponentsOnRoot = new RegExp('^('+componentNames.join('|')+')$');
const fileDirList = fs.readdirSync('.');
const regexListRemoveFile =[
  /^index/,
  /^types\.d/,
];
const regexListRemoveDir =[
  /^helpers$/,
  regexComponentsOnRoot,
];
fileDirList.forEach(fileOrDir => {
  if(regexListRemoveFile.find(r => r.test(fileOrDir))){
    fs.unlinkSync(fileOrDir);
  }
  if(regexListRemoveDir.find(r => r.test(fileOrDir))){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
});
