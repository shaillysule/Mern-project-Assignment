const Project = require('../models/Project');

// GET /api/projects -> landing page ke liye
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/projects -> admin panel ke liye add
exports.createProject = async (req, res) => {
  try {
    const { image, name, description } = req.body;
    
    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const project = new Project({ image, name, description });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error('Create project error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /api/projects/:id -> admin panel ke liye delete
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};