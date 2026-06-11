const users = require("../models/users.model");
const path = require("path")

exports.getUsers = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}

exports.postUsers = (req, res) => {
    const name = req.body?.name;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    users.push({ name });

    if (req.is('json')) {
        return res.status(201).json({ users });
    }

    res.redirect('/users');
}

