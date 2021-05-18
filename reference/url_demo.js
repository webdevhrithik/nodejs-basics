const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html/?id=100?status=active');

//get the url
console.log(myUrl.href);
console.log(myUrl.toString());

// host root domain
console.log(myUrl.hostname); // host name does not get the PORT host does

// path name
console.log(myUrl.pathname);

//queries
console.log(myUrl.search);
console.log(myUrl.searchParams);

// add params to the url
myUrl.searchParams.append('abc', '123');
console.log(myUrl.href);

// loop through the params
myUrl.searchParams.forEach((value, name) => console.log(` ${value} ${name}`));
