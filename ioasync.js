var fs = require('fs');
var file = process.argv[2];
// pathfile /Users/usuario/Projects/crack/learnyounode/hello.js
var buf = fs.readFile(file, processFile);

function processFile(error, data){
  if (error) {
    console.log(error);
    return
  }
  var str = data.toString().split('\n').length -1;
  console.log(str);
}
