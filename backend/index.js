// Required modules
const express = require('express');
const multer = require('multer');
const cors = require('cors');

// Initialize app
const app = express();
const port = 3000;

//  Enable CORS to allow requests from frontend
app.use(cors());

// Setup file upload (store files in uploads/ folder)
const upload = multer({ dest: 'uploads/' });

// `    Create route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file received' });
  }

  console.log("📁 File received:", file.originalname);

  res.json({
    message: '✅ File uploaded successfully!',
    filename: file.originalname
  });
});

// 6. Start server
app.listen(port, () => {
  console.log(`🚀 SwiftDrop backend is running at http://localhost:${port}`);
});
