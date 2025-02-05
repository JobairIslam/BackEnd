const express = require('express');
const app = express();
const port = 3000;
app.get('/products/:id', (req, res) => {
    res.send(`<h2>ID = ${req.params.id}</h2>`);
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`)); 
