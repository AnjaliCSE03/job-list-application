import express from 'express';
import { saveJobData, getJobData } from '../controller/job-controller.js';

const router = express.Router();


router.post('/saveData', saveJobData);
router.get('/get', getJobData);

export default router;