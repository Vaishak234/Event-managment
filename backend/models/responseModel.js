import mongoose from "mongoose";


const responseSchema = new mongoose.Schema({
 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User id required'],
    },
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Form",
        required: [true, 'form id required'],
    },
    formData:{
        type:Object,
        required:[true,'form data required'],
    }


}, { timestamps: true })

const ResponseModel = mongoose.model("Response", responseSchema)

export default ResponseModel
