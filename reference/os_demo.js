const os = require('os');

// memory inspection
console.log(os.freemem());
console.log(os.totalmem());

// platform
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());
