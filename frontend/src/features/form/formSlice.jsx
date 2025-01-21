import { createSlice } from "@reduxjs/toolkit";
import { createForm, getAllForm } from "./formActions";

const initialState = {
    forms: [],
    status: 'idle',
    error: null,
};



const formSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // get all forms
            .addCase(getAllForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllForm.fulfilled, (state, action) => {
               
                 state.forms = action.payload.data
            })
            .addCase(getAllForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            
            // create form
            .addCase(createForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createForm.fulfilled, (state, action) => {
              
                state.name = action.payload?.data?.name
                state.formFields = action.payload?.data?.formFields
                state._id = action.payload?.data?._id
                 
            })
            .addCase(createForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});



export const selectAllForms = state => state.forms.forms

export default formSlice.reducer;