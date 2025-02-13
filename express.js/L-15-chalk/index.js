const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chalk=require("chalk")


// Register route
app.get('/register', (req, res) => {
    res.send('Register page');
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.blue.bgRed.bold(`Server is listening on http://localhost:${port}`));
});