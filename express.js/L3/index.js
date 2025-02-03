const express = require('express');
const app = express();
const port=3000;

app.use("/",(req,res)=>{
    res.send("jnrfu ernfjwerjnf freifj")
})
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
