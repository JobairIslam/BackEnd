require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//-----------express static middleware----------
// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Ensure the path to index.html is correct
});

// app.get('*', (req, res) => {
//     res.send("404");
// });
//error handeling middleWare
app.use((req,res,next)=>{
    res.send("404 not found")
})
app.use((err,req,res,next)=>{
    res.status(500).send("something went wrong")
})
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
