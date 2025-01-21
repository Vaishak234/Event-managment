import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import { createForm, getAllForms, deleteFormById, getFormById, getResponse } from '../services/formServices.js'


export const getAllFormsController = asyncHandler(async (req, res) => {
    
        
    const userId = new mongoose.Types.ObjectId(req.userId)

    if (!userId) return res.status(400).json({ message: 'User is not valid', success: false });

    const allForms = await getAllForms()

    if (!allForms) {
        return res.status(400).json({ message: 'Error in creating user', success: false });
    }

    res.status(201).json({ message: 'form fetched successfully', success: true ,data:allForms });
   
   
});

export const getFormByIdController = asyncHandler(async (req, res) => {
    
        
    const userId = new mongoose.Types.ObjectId(req.userId)
    
    
    const formId = new mongoose.Types.ObjectId(req.params?.formId)

    console.log(formId);
    

    if (!userId || !formId) return res.status(400).json({ message: 'User is not valid', success: false });

    const form = await getFormById(formId)

    if (!form) {
        return res.status(400).json({ message: 'Error in creating user', success: false });
    }

    res.status(201).json({ message: 'form fetched successfully', success: true, data: form });
   
   
});



export const createFormController = asyncHandler(async(req , res) =>{
    
    const userId = new mongoose.Types.ObjectId(req.userId)
    
      
        const { name, formFields  } = req.body;

        console.log(formFields[0]);
        
      
    
        if (!name || !formFields.length > 0) {
            return res.status(400).json({ message: 'Enter valid fields', success: false });
        }
    
        const newForm = await createForm(name, formFields, userId);
    
        if (!newForm) {
            return res.status(400).json({ message: 'Error in creating user', success: false });
        }
    
        res.status(201).json({ message: 'Form created successfully', success: true , data:newForm});

    
})



export const deleteFormController = asyncHandler(async(req , res) =>{
    
    const userId = new mongoose.Types.ObjectId(req.userId)
    const {formId} = req.params
      
    
        if (!userId || !formId) {
            return res.status(400).json({ message: 'Enter valid fields', success: false });
        }
    
        const deleteForm = await deleteFormById(formId, userId);
    
        if (!newForm) {
            return res.status(400).json({ message: 'Error in creating user', success: false });
        }
    
        res.status(201).json({ message: 'form deleted successfully', success: true });

    
})


export const getFormResponses = asyncHandler(async(req,res)=>{

    const userId = new mongoose.Types.ObjectId(req.userId)
    const formId = req.params.formId ? new mongoose.Types.ObjectId(req.params.formId) : null;
    if (!formId) return res.status(400).json({ message: 'Form ID is not valid', success: false });
    console.log(req.params);
    

    if (!userId ) {
        return res.status(400).json({ message: 'Enter valid fields', success: false });
    }

    const getAllResponse = await getResponse(formId, userId);

    console.log(getAllResponse);
    

    if (!getAllResponse) {
        return res.status(400).json({ message: 'Error in fetching responses', success: false });
    }

    res.status(201).json({ message: 'Response fetched successfully', success: true ,data:getAllResponse });


})