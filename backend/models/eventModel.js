import mongoose from "mongoose";


const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Form name required'],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User id required'],
    },
    venue: {
        type: String,
        required: true,       
    },
    date: {
        type: Date,
        required: true,       
    },
    timezone: {
        type: String,
        required:true,
    },
    type:{
        type:String,
        enum:['virtual','online'],
        require:true
    },
    link:{
      type:String,
      default:''
    },
    form:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Form'
    }


}, { timestamps: true })

const eventsModel = mongoose.model("Event", eventSchema)

export default eventsModel
