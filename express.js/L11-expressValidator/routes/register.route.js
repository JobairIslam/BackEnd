const express = require("express");
const router = express.Router();
const validation = require("../controllers/validation.contraller");
const register = require("../controllers/register.controller");

router.post("/api/register", validation, register);

module.exports = router;
