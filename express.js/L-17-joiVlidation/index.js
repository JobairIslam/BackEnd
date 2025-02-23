const express = require('express');
const joi = require('joi');
const userRouter = require('./routes/user');
const app = express();
const port = 3008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.get("/test", (req, res) => {
    res.json({ message: "testing" });
});

// API: /api/register
app.use("/api",userRouter)