import express from 'express';
import router from './Routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Register API routes under /api to separate from frontend routes
app.use('/api', router);

// Serve React static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route to serve React frontend
app.get('*', (req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).send({ message: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Optional: Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8000;
dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

