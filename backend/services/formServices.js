import FormModel from '../models/formModel.js'
import ResponseModel from '../models/responseModel.js';


export const createForm = async (name, formFields, userId) => {
    try {
        const form = await FormModel.create({
            name,
            userId,
            formFields
        });

        return form;
    } catch (error) {
        console.log('error in creating form', error);

    }
}

export const getAllForms = async ( ) => {
    try {
        const form = await FormModel.find()

        return form;
    } catch (error) {
        console.log('error in fetching form', error);

    }
}

export const getFormById = async (formId) => {
    try {
        const form = await FormModel.findOne({_id:formId})

        return form;
    } catch (error) {
        console.log('error in fetching form', error);

    }
}

export const deleteFormById = async (formId, userId) => {
    try {
        const form = await FormModel.deleteOne({_id:formId , userId})

        return form;
    } catch (error) {
        console.log('error in fetching form', error);

    }
}


export const getResponse = async (formId) => {
    try {
        const response = await ResponseModel.find({ formId })
            .populate({ path: 'userId', select: 'name' })
            .populate({ path: 'formId', select: 'name' })

        return response;
    } catch (error) {
        console.log('error in fetching form', error);

    }
}