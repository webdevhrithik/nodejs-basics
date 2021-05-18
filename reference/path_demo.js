const path = require('path');

// give base name file name
console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

// path object

console.log(path.parse(__filename).ext);

// concatinate paths

console.log(path.join(__dirname, 'test', 'hello.html'));
