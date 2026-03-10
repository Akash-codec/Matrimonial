const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Store files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Generate a unique filename: fieldname-timestamp.extension
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif|webp/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Initialize upload variable
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// @route   POST /api/upload
// @desc    Upload an image
// @access  Public
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // If there's a previous image, delete it
  if (req.body.previousImage) {
    const previousImagePath = path.join(uploadDir, req.body.previousImage);
    if (fs.existsSync(previousImagePath)) {
      try {
        fs.unlinkSync(previousImagePath);
      } catch (err) {
        console.error('Error deleting previous image:', err);
      }
    }
  }

  // Generate the live link
  const protocol = req.get('host').includes('localhost') ? 'http' : 'https';
  const imageUrl = `${protocol}://${req.get('host')}/uploads/${
    req.file.filename
  }`;

  res.status(200).json({
    message: 'Image uploaded successfully',
    url: imageUrl,
  });
});

module.exports = router;
