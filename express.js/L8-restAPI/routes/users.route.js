const express = require('express');
const { getUsers, postUsers, updateUser, deleteUser } = require('../controllers/users.controllers');
const router = express.Router();

router.get('/users',getUsers);
router.post('/users',postUsers);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

module.exports = router;