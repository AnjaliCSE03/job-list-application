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

// Your API routes
app.use('/api', router);  // Changed from '/' to '/api' to separate frontend & backend routes

// Serve React frontend build files
const __dirname = path.resolve(); // for ES modules, get current directory

app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route to serve React's index.html for any non-API routes
app.get('*', (req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    // If request starts with /api and no route matched, send 404
    return res.status(404).send({ message: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 8000;

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

