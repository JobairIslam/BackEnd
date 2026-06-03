const fs = require('fs');

fs.writeFile("demo.text","i am juba", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully written");
    }
})
fs.appendFile("demo.text"," how are you", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully written");
    }
})

fs.readFile("demo.text","utf-8",(err,data)=>{
        if(err){
        console.log(err);

    }
    else{
        console.log(data);
    }
})

//rename a file
//delete a file  HW