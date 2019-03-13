var fs = require('fs');
// pathfile /Users/usuario/Projects/crack/learnyounode/hello.js
// var buf = fs.readFileSync('/Users/usuario/Projects/crack/learnyounode/hello.js');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString().split('\n').length -1;
console.log(str);
