const Client = require('../models/Client');

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createClient = async (req, res) => {
  try {
    const { image, name, description, designation } = req.body;
    
    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const client = new Client({ image, name, description, designation });
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    console.error('Create client error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};