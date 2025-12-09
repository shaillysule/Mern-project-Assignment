const express = require('express');
const router = express.Router();
const { getClients, createClient } = require('../controllers/clientController');
const { upload, processClientImage } = require('../middlewares/uploadMiddleware');

// GET all clients
router.get('/', getClients);

// POST create client with image upload
router.post('/', upload.single('image'), processClientImage, createClient);

module.exports = router;