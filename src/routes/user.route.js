const express = require('express');
const {Login} = require( "../controllers/user.controller");
const router = express.Router();

router.post('/login', Login);


router.post('/validate', Login);
router.post('/reset', Login);
router.post('/update', Login);
router.post('/verify', Login);
router.post('/', Login);

module.exports = router;