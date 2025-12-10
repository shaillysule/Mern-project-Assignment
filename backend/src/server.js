const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://mern-project-assignment.vercel.app',
    'https://mern-project-assignment-git-main-shaillysules-projects.vercel.app',
    'https://mern-project-assignment-e2der8koc-shaillysules-projects.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Routes imports ---
const projectRoutes = require('./routes/projectRoutes');
const clientRoutes = require('./routes/clientRoutes');
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

// --- Base route ---
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN Backend API',
    status: 'running',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      clients: '/api/clients',
      contacts: '/api/contacts',
      newsletter: '/api/newsletter'
    }
  });
});

// --- Health check ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend running' });
});

// --- Use Routes with prefix ---
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// MongoDB + Server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });