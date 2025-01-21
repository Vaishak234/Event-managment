import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosPrivate} from '../../axios/axiosPrivate'


export const getAllForm = createAsyncThunk('form/getAllForm', async (_, thunkAPI) => {
    try {
        const response = await axiosPrivate.get('/form');

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})


export const getFormById = createAsyncThunk('form/getAllForm', async (formId, thunkAPI) => {
    try {
        const response = await axiosPrivate.get('/form/'+formId);

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})



export const createForm = createAsyncThunk('form/createForm', async (formData, thunkAPI) => {
    try {
        const response = await axiosPrivate.post('/form', formData);
        
        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})


export const editForm = createAsyncThunk('form/createForm', async (formData, thunkAPI) => {
    try {
        const response = await axiosPrivate.put('/form', formData);

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})


export const deleteForm = createAsyncThunk('form/deleteForm', async (id, thunkAPI) => {
    try {
        const response = await axiosPrivate.delete('/form/'+id );

        return response?.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})



