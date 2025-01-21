import { createSlice } from "@reduxjs/toolkit";
import { createEvent, getAllEvents } from "./eventActions";

const initialState = {
    events: [],
    status: 'idle',
    error: null,
};



const formSlice = createSlice({
    name: "events",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.events = action.payload?.data
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // add event
            .addCase(createEvent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.events.push(action.payload?.data)
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export const selectEvents = state => state.events.events

export default formSlice.reducer;