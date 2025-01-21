import express from 'express';
import verifyAuthToken from '../middlewares/verifyAuthentication.js'
import { createFormController, deleteFormController, getAllFormsController, getFormByIdController, getFormResponses } from '../controllers/formController.js';

const router = express.Router();

router.use(verifyAuthToken)


router.get('/', getAllFormsController);

router.get('/:formId', getFormByIdController);

router.post('/',createFormController);

router.delete('/:formId',deleteFormController);


router.get('/response/:formId', getFormResponses);



export default router;