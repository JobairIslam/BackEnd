const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan=require("morgan") 
app.use(morgan("dev"))


app.get('/', (req, res) => {
  res.send("home route");
});
app.get('/test', (req, res) => {
  res.status(200).send("test route");
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
