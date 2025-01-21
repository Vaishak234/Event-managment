import mongoose from "mongoose";


const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Form name required'],
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: [true, 'User id required'],
        ref:"User"
    },
    // description: {
    //     type: String,
    //     required: true,       
    // },
    status: {
        type: String,
        enum: ['published', 'drafted'],
        required:true,
        default: 'published'
    },
    formFields:[
        {
            id:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            required:{
                type:Boolean,
                default:true
            },
            fields:{
                type :[],
                required:true
            }
        }
    ]


}, { timestamps: true })

const formModal = mongoose.model("Form", formSchema)

export default formModal
