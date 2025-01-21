import express from 'express';
import verifyAuthToken from '../middlewares/verifyAuthentication.js'
import { createResponse } from '../controllers/responseController.js';

const router = express.Router();

router.use(verifyAuthToken)


router.post('/response', createResponse);




export default router;