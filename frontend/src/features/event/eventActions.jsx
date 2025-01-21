import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../axios/axiosPrivate";



export const getAllEvents = createAsyncThunk('event/getAllEvents', async (_, thunkAPI) => {
    try {
        const response = await axiosPrivate.get('/event');
        console.log(response);
        
        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})



export const createEvent = createAsyncThunk('event/createEvent', async (eventData, thunkAPI) => {
    try {
        const response = await axiosPrivate.post('/event', eventData);

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})


export const editEvent = createAsyncThunk('event/editEvent', async (eventData, thunkAPI) => {
    try {
        const response = await axiosPrivate.put('/event', eventData);

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})


export const deleteEvent = createAsyncThunk('event/deleteEvent', async (eventData, thunkAPI) => {
    try {
        const response = await axiosPrivate.put('/event', eventData);

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

