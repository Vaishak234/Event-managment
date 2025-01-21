import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import ResponseModel from '../models/responseModel.js';


export const createResponse = asyncHandler(async (req, res) => {

    const userId = new mongoose.Types.ObjectId(req.userId)
    

    if (!userId) return res.status(400).json({ message: 'User is not valid', success: false });

    const {formId , formData} = req.body

    if(!formId || !formData) return res.status(400).json({ message: 'Form id and data are required', success: falss})


    const newResponse = await ResponseModel.create({
        userId: userId,
        formId,
        formData,

    })

    if (!newResponse) {
        return res.status(400).json({ message: 'Error in sending response', success: false });
    }

    res.status(201).json({ message: 'Response send successfully', success: true, data: newResponse });
   

});