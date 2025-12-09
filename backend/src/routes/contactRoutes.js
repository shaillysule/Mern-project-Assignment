const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');

router.post('/', createContact);   // landing page se call
router.get('/', getContacts);      // admin panel me list

module.exports = router;
