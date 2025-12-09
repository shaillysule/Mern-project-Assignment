const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');
const {deleteProject}=require('../controllers/projectController')
// All projects (for landing)
const multer = require('multer');
const sharp = require('sharp'); // YE ADD KARO
const path = require('path');

// Storage configuration
const storage = multer.memoryStorage(); // YE CHANGE KARO (diskStorage se memoryStorage)

const upload = multer({ storage: storage });

// Project upload route
router.post('/projects', upload.single('image'), async (req, res) => {
  try {
    // Image ko crop karo using Sharp
    const croppedImageBuffer = await sharp(req.file.buffer)
      .resize(700, 450, { // Width x Height
        fit: 'cover', // Image ko crop karega
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toBuffer();

    // Cropped image ko save karo
    const filename = `project-${Date.now()}.jpg`;
    const filepath = path.join(__dirname, '../uploads', filename);
    
    await sharp(croppedImageBuffer).toFile(filepath);

    // Database mein save karo
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      image: `/uploads/${filename}`
    });

    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/', getProjects);

// Add project (for admin)
router.post('/', createProject);
router.delete('/:id', deleteProject);

module.exports = router;
