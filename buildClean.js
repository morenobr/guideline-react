const fs = require('fs');

const fileDirList = fs.readdirSync('.');
fileDirList.forEach(fileOrDir => {
  if(/^index/.test(fileOrDir)){
    fs.unlinkSync(fileOrDir);
  }
  if(/^components(Styled)?$/.test(fileOrDir)){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
  if(/^styles?$/.test(fileOrDir)){
    fs.rmdirSync(fileOrDir, {
      recursive: true,
    })
  }
});