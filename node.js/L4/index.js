//os-operating system , path
const os=require("os")
// console.log(os.userInfo())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())

console.log(__dirname)
console.log(__filename)

const path=require("path")
// console.log(path)
console.log(path.extname("index.html"))
const joinName=path.join(__dirname+"/views")
console.log(joinName)

 