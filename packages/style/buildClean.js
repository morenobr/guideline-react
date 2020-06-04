const fs = require('fs');
const fileDirList = fs.readdirSync('.');
const regexListRemoveFile =[
  /^[^\/]+\.css$/,
  /^temp-buildjs\.js$/,
];
fileDirList.forEach(fileOrDir => {
  if(regexListRemoveFile.find(r => r.test(fileOrDir))){
    fs.unlinkSync(fileOrDir);
  }
});
console.log('Build Cleaning completed');
