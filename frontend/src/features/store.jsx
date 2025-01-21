import { configureStore } from "@reduxjs/toolkit"
import userReducer from './User/UserSlice'
import customFormReducer from './custormForm/customFormSlice'
import formsReducer from './form/formSlice'
import eventsReducer from './event/eventSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        customForm :customFormReducer,
        forms:formsReducer,
        events:eventsReducer
    }
});


export default store;


