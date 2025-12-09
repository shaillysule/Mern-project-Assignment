const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Multer memory storage (file buffer mein aayegi)
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Only images allowed
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// Upload directory banao agar nahi hai
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Project Image Processing (16:9 ratio)
const processProjectImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const filename = `project-${Date.now()}.jpg`;
    const filepath = path.join(uploadDir, filename);

    await sharp(req.file.buffer)
      .resize(700, 450, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toFile(filepath);

    // Processed image path ko req.body mein add karo
    req.body.image = `/uploads/${filename}`;
    next();
  } catch (err) {
    console.error('Image processing error:', err);
    res.status(500).json({ message: 'Error processing image' });
  }
};

// Client Image Processing (Square 1:1 ratio)
const processClientImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const filename = `client-${Date.now()}.jpg`;
    const filepath = path.join(uploadDir, filename);

    await sharp(req.file.buffer)
      .resize(500, 500, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toFile(filepath);

    // Processed image path ko req.body mein add karo
    req.body.image = `/uploads/${filename}`;
    next();
  } catch (err) {
    console.error('Image processing error:', err);
    res.status(500).json({ message: 'Error processing image' });
  }
};

module.exports = {
  upload,
  processProjectImage,
  processClientImage
};