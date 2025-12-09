const Subscriber = require('../models/Subscriber');

// POST subscribe
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: 'Already subscribed' });
    }

    const sub = new Subscriber({ email });
    await sub.save();
    res.status(201).json({ message: 'Subscribed successfully', sub });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET all subscribers (admin)
exports.getSubscribers = async (req, res) => {
  try {
    const list = await Subscriber.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
