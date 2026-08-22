const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configured allowed origins per requirements
const allowedOrigins = [
  'https://staging.amigoacademy.in',
  'https://amigoacademy.in',
  'http://localhost:5173',
  'http://localhost:3000'
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, or postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
        return callback(null, true);
      }
      return callback(null, true); // Allow during setup
    },
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Amigo Backend API is running' });
});

// Register Form API Routes under /api
const formRoutes = require('./routes/forms');
app.use('/api', formRoutes);

// Catch-all 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'API Route Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ status: 'error', message: 'Internal Server Error', error: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 Amigo Academy Backend API running on port ${PORT}`);
});
