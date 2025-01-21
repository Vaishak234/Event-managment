import { v4 as uuidv4 } from 'uuid';

const formFieldTemplates = {
    name: {
        name: "name",
        fields: [
            { type: 'text', label: 'firstname', placeholder: 'enter your firstname', w: 2, required: false, name: 'firstname' },
            { type: 'text', label: 'lastname', placeholder: 'enter your lastname', w: 2, required: false, name: 'lastname' },
        ]
    },
    email: {
        name: "email",
        fields: [
            { type: 'email', label: 'Email', placeholder: 'enter your email', w: 1, required: false, name: 'email' }
        ]
    },
    phone: {
        name: "phone",
        fields: [
            { type: 'number', label: 'Mobile', placeholder: 'Mobile number', w: 1, required: false, name: 'mobile' }
        ]
    },
    address: {
        name: "address",
        fields: [
            { type: 'text', label: 'address line 1', placeholder: '', w: 1, required: false, name: 'addressLine1' },
            { type: 'text', label: 'address line 2', placeholder: '', w: 1, required: false, name: 'addressLine2' },
            { type: 'text', label: 'city', placeholder: '', w: 2, required: false, name: 'city' },
            { type: 'text', label: 'state', placeholder: '', w: 2, required: false, name: 'state' },
            { type: 'number', label: 'pincode', placeholder: '', w: 2, required: false, name: 'pincode' },
        ]
    },
    date: {
        name: "date",
        fields: [
            { type: 'date', label: 'Date', placeholder: '', w: 1, required: false, name: 'date' }
        ]
    },
    text: {
        name: "Text",
        fields: [
            { type: 'text', label: 'Text', placeholder: '', w: 1, required: false, name: 'text' }
        ]
    },
    'date-time': {
        name: "date-time",
        fields: [
            { type: 'datetime-local', label: 'Date-Time', placeholder: '', w: 1, required: false, name: 'dateTime' }
        ]
    },
    radio: {
        name: "radio",
        fields: [
            { type: 'radio', label: 'first choice', w: 1, required: false, checked: true, name: 'firstChoice' },
            { type: 'radio', label: 'second choice', w: 1, required: false, checked: false, name: 'secondChoice' },
            { type: 'radio', label: 'third choice', w: 1, required: false, checked: false, name: 'thirdChoice' },
        ]
    },
    checkbox: {
        name: "checkbox",
        fields: [
            { type: 'checkbox', label: 'first choice', w: 1, required: false, checked: true, name: 'firstChoice' },
            { type: 'checkbox', label: 'second choice', w: 1, required: false, checked: false, name: 'secondChoice' },
            { type: 'checkbox', label: 'third choice', w: 1, required: false, checked: false, name: 'thirdChoice' },
        ]
    },
    submit: {
        name: "submit",
        fields: [
            { type: 'button', label: 'Submit', w: 3, name: 'submit' }
        ]
    },
    dropdown: {
        name: "dropdown",
        fields: [
            { type: 'select', label: 'select', placeholder: 'Select', w: 1, required: false, name: 'select', options: [{ name: 'option 1', value: '1' }, { name: 'option 2', value: '2' }] }
        ]
    }
};

export const addFormFieldFunction = (type) => {
    const template = formFieldTemplates[type];

    if (!template) {
        console.warn(`Unknown type: ${type}`);
        return null;
    }

    return {
        id: uuidv4(),
        required: false,
        ...template,
        fields: template.fields.map(field => ({
            id: uuidv4(),
            required: false,
            ...field
        }))
    };
};
