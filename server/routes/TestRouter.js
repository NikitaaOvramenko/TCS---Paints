// routes/TestRouter.js
const express = require('express')
const controller = require( "../controllers/Test.js");

const router = express.Router();

// POST /api/test
router.post("/",controller.TestFunc);



module.exports = router
