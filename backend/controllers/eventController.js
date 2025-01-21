import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import { deleteEventById, getAllEvents, createEvent } from '../services/eventServices.js'


export const getAllEventsController = asyncHandler(async (req, res) => {

    const userId = new mongoose.Types.ObjectId(req.userId)

    if (!userId) return res.status(400).json({ message: 'User is not valid', success: false });
    const allEvents = await getAllEvents()

    console.log(allEvents);
    

    if (!allEvents) {
        return res.status(400).json({ message: 'Error in fetching events', success: false });
    }

    res.status(201).json({ message: 'form fetched successfully', success: true, data: allEvents });
   
   
});




export const createEventController = asyncHandler(async (req, res) => {
    const userId = new mongoose.Types.ObjectId(req.userId)

    const { title, date, timezone, venue, type, link, form } = req.body;
    

    if (!title || !date || !timezone || !venue || !type || !form) {
        return res.status(400).json({ message: 'Enter valid fields', success: false });
    }

    const newEvent = await createEvent({ title, date, timezone, venue, type, link, form, userId });

    if (!newEvent) {
        return res.status(400).json({ message: 'Error in creating event', success: false });
    }

    res.status(201).json({ message: 'Event created successfully', success: true, data: newEvent });
});



export const deleteEventController = asyncHandler(async(req , res) =>{
    
    const userId = new mongoose.Types.ObjectId(req.userId)
    const {eventId} = req.params
      
    
        if (!userId || !eventId) {
            return res.status(400).json({ message: 'Enter valid fields', success: false });
        }
    
        const deleteForm = await deleteEventById(eventId, userId);
    
        if (!newForm) {
            return res.status(400).json({ message: 'Error in deleting  event', success: false });
        }
    
        res.status(201).json({ message: 'event deleted successfully', success: true });

    
})