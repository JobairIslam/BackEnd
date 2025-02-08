const express = require("express"); // Import express
const cors = require("cors"); // Import cors
const bodyParser = require("body-parser"); // Import body-parser

const app = express(); // Create an instance of express
const PORT = 3000; // Define the PORT variable

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});