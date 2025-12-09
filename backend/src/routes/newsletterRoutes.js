const express = require('express');
const router = express.Router();
const { subscribe, getSubscribers } = require('../controllers/newsletterController');

router.post('/', subscribe);     // landing page
router.get('/', getSubscribers); // admin

module.exports = router;
