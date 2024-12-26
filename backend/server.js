const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  console.log('Test route hit!');
  res.json({ status: 'Backend is running!' });
});

// Roast routes
app.post('/api/roast', (req, res) => {
  console.log('Roast request received:', req.body);
  const mockRoast = "Oh look, another 'Results-Driven Professional' whose biggest achievement is surviving 47 consecutive Zoom meetings without falling asleep!";
  res.json({ roast: mockRoast });
});

app.get('/api/random-roast', (req, res) => {
  console.log('Random roast requested');
  const mockRoast = "Your LinkedIn profile reads like it was written by an AI that was trained exclusively on corporate buzzword bingo cards.";
  res.json({ roast: mockRoast });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test the server: http://localhost:${PORT}/test`);
});