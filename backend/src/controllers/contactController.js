const Contact = require('../models/Contact');

// Landing page se form submit
exports.createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json({ message: 'Contact saved', contact });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin panel se sab view
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
