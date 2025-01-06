//build in modules
//fs-file system 
console.log("hi")
const fs=require('fs');
// console.log(fs);


//it will make a file 
fs.writeFile('demo1.text',"this is a writeFile",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("ok")
    }
})



//add content on the file if the file exists
fs.appendFile('demo1.text'," my name is jubair islam asif",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("ok")
    }
})



//to read the content in the file
fs.readFile('demo1.text','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})


//to chect if the file exists
fs.access('demo1.text',fs.constants.F_OK,(err)=>{
    if(err){
         console.error("File demo1.txt does not exist:", err);
    }else{
        console.log("file exists")
    }
})

//to rename the file
fs.rename('demo1.text', 'demo2.text', (err) => {
    if (err) {
        console.error("Error renaming file:", err);
    } else {
        console.log("File renamed successfully to demo2.txt");
    }
});


//to delete a file
fs.unlink('demo1.text',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file deleted")
    }
})



//to chect if the file exists
fs.exists('demo1',(res)=>{
    if(res){
        console.log(yes)
    }else{
        console.log("no")
    }
})