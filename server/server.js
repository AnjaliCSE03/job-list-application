import express from 'express';
import router from './Routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;


dbConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
