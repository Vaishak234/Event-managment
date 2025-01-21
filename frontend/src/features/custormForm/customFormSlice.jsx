import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import { createSelector } from 'reselect';


const initialState = {
    _id :'',
    name:'',
    formFields: []
}


export const customFormSlice = createSlice({
    name: 'customForm',
    initialState,
    reducers: {
        addCustomFormName: (state, action) => {
          
            state.name = action.payload.name
        },
        addFormElement: (state, action) => { 
           
            state.formFields.push(action.payload)
        },
        removeFormElement: (state, action) => {
          
            let index = state.formFields.findIndex(field => field.id === action.payload)
            if (index !== -1) {
                state.formFields.splice(index, 1)
            }
        },
        clearForm :(state)=>{
            state.formFields = []
            state.name = ''
        },
        updateFormField: (state, action) => {
            const { type, id, newValue, subId } = action.payload;

            console.log(id, type, newValue);

            const field = state.formFields.find((field) => field.id === id);

            if (!field) return;


            if (type === 'label') {
                field.name = newValue;
            }

            console.log(field.fields);
            if (['sublabel', 'placeholder'].includes(type)) {
                const subField = field.fields.find(item => item.id === subId);

                if (!subField) return;


                if (type === 'sublabel') {
                    subField.label = newValue;
                } else if (type === 'placeholder') {
                    subField.placeholder = newValue;
                }
            }

            if (type === 'required') {
                field.required = newValue;
                field.fields.forEach(item => item.required = newValue);
            }

            if (type === 'width') {
                console.log(newValue);

                field.fields.forEach(item => item.w = newValue);
            }
        },

       
    }
    
});


export const { addCustomFormName, addFormElement, removeFormElement, clearForm, updateFormField } = customFormSlice.actions;


export const selectCustomForm = (state) => state.customForm;


export const selectFormFieldById = createSelector(
    [(state, id) => id, (state) => state.customForm.formFields],
    (id, formFields) => formFields?.find(form => form.id === id) || null
);




export default customFormSlice.reducer;