const fs = require('fs');
const path = require('path');

// create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder Created...');
// });

// create and write to file simaltaniously

// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   (err) => {
//     if (err) throw err;
//     console.log('File Created...');

//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love node js',
//       (err) => {
//         if (err) throw err;
//         console.log('File Created...');
//       }
//     );
//   }
// );

// Read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.rename(
//   path.join(__dirname, '/test', 'hello.txt'),
//   path.join(__dirname, '/test', 'HelloWorld.txt'),
//   (err) => {
//     if (err) throw err;
//     console.log('File Renamed...');
//   }
// );
