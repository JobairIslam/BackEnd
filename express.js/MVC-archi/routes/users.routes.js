const express = require('express');
const router = express.Router();
const { getUsers, postUsers } = require("../controllers/users.controller");

router.get('/users', getUsers);
router.post('/users', postUsers);

module.exports = router;