const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post('/nugu/startTimer', nugu);
router.post('/nugu/recordTime', nugu);
router.post('/nugu/remainTime', nugu);

module.exports = router;