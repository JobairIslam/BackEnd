const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chalk = require('chalk');


app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Home');
});

//name,email,pass,dob

// Handle 404 errors (must be after all other routes)
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.blue.bgRed.bold(`Server is listening on http://localhost:${port}`));
});