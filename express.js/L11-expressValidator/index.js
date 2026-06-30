const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/register.route");

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use(userRouter);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
