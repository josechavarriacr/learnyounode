var fs = require('fs');
var pathDir = process.argv[2];
var fileExt = process.argv[3];
// pathDir /Users/usuario/Projects/crack/learnyounode/
var buf = fs.readdir(pathDir, processFile);

function processFile(error, list){
  if (error) {
    console.log(error);
    return
  }
  // var str = list.toString().split('\n').length -1;
  Object.keys(list).forEach(i => {
    var result = isJS(list[i]);
    if(result){
      console.log(result);
    }
  });
}

function isJS(file) {
  var path = require('path');
  var ext = path.extname(file);
  var jsFile = `.${fileExt}`;
  return (ext === jsFile)? file : false;
}
