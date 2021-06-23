const express = require('express');
const nugu = require('../nugu');
const android = require('android.js');
const router = express.Router();

router.post('/nugu/startTimer', nugu);
router.post('/nugu/recordTime', nugu);
router.post('/nugu/remainTime', nugu);
router.get('/android', android);

module.exports = router;