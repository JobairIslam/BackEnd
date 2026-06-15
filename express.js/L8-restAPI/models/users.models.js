const {v4: uuidv4} = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: "jobair",
        email: "jobair@gmail.com",
    },
    {
        id: uuidv4(),
        username: "sumayta",
        email: "sumayta@gmail.com",
    }
]

module.exports = users;