const fs = require('fs');
const path = require('path');

const fileDirList = fs.readdirSync(path.resolve(__dirname));
const regexListRemoveDir =[
  /^dist$/,
];
fileDirList.forEach(fileOrDir => {
  if(regexListRemoveDir.find(r => r.test(fileOrDir))){
    fs.rmdirSync(path.resolve(__dirname, fileOrDir), {
      recursive: true,
    })
  }
});
