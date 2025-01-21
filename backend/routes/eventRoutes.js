import express from 'express';
import verifyAuthToken from '../middlewares/verifyAuthentication.js'
import { createEventController, deleteEventController, getAllEventsController } from '../controllers/eventController.js';

const router = express.Router();

router.use(verifyAuthToken)


router.get('/', getAllEventsController);

router.post('/', createEventController);

router.delete('/:formId', deleteEventController);



export default router;