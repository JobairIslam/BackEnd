//os and path

// const os = require("os");
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());

// const {totalmem,freemem} = require ("os")

// console.log(totalmem())
// console.log(freemem())

// console.log(__dirname);
// console.log(__filename)

const path = require("path");
// console.log(path)

const joinName = path.join(__dirname+"/views");
console.log(joinName)