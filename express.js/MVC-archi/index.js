//MVC architecture
//MVC-->(Model, View, Controll

const express = require('express');
const userRouter=require("./routes/users.routes")
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))
app.use(userRouter)

const users=[
    {
        name:"jubair",
        age:22
    },
    {
        name:"marzia",
        age:22
    }
]

const htmlForm=`
<form method="POST" action="/users">
    <input type="text" name="name" placeholder="Enter Name" />
    <input type="number" name="age" placeholder="Enter Age" />
    <button type="submit">Save User</button>
</form>
`


app.use((req,res,next)=>{
    res.status(404).send("something went wrong")
})
app.get('*', (req, res) => {
    res.send("404");
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
