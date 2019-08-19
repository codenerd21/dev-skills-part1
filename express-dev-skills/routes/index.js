const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');



/* GET home page. */
router.get('/', skillsCtrl.index);

module.exports = router;
