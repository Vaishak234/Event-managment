import EventsModel from '../models/eventModel.js'


export const createEvent = async (eventData) => {
    try {
        const event = await EventsModel.create(eventData)

        return event;
    } catch (error) {
        console.log('error in creating event', error);

    }
}

export const getAllEvents = async () => {
    try {
        const event = await EventsModel.find()

        return event;
    } catch (error) {
        console.log('error in fetching event', error);

    }
}

export const deleteEventById = async (eventId, userId) => {
    try {
        const event = await EventsModel.deleteOne({ _id: eventId, userId })

        return event;
    } catch (error) {
        console.log('error in fetching event', error);

    }
}