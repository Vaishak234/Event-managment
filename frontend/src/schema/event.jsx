import * as Yup from 'yup';


export const eventValidationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        venue: Yup.string().required('Venue is required'),
        type: Yup.string().required('Type is required'),
        form: Yup.string().required('Type is required'),
        date: Yup.date().required('Date is required'),
        timezone: Yup.string().required('Timezone is required'),
        link: Yup.string()
    });
