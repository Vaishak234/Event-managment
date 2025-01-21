import { Box, Button, FormControl, FormLabel, TextField, Select, MenuItem } from "@mui/material";
import ModalContainer from './ui/Modal';
import PropTypes from 'prop-types';
import { useFormik } from "formik";
import { eventValidationSchema } from "../schema/event";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllForm } from "../features/form/formActions";
import { selectAllForms } from "../features/form/formSlice";
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { createEvent } from "../features/event/eventActions";

const AddModal = ({ open, handleClose }) => {

  
    const dispatch = useDispatch()
    const forms = useSelector(selectAllForms)
    useAxiosPrivate()

    const initialValues = {
        title: 'Yoga event',
        venue: 'India',
        type: 'virtual',
        date: new Date(),
        timezone: 'IST',
        form: '',
        link: ''
    };

    useEffect(()=>{
        dispatch(getAllForm())

    },[dispatch])
   

    console.log(forms);
    
   

    const onSubmit = async(values) =>{
      try {
          let response = await dispatch(createEvent(values)).unwrap()

          if(response){
            
            handleClose()
          }
          
      } catch (error) {
         console.log(error);
         
      }
    }


    const formik = useFormik({
        initialValues,
        validationSchema: eventValidationSchema,
        onSubmit,
        validateOnBlur: true,
        validateOnChange: true,
    });


    return (
        <div>
            <ModalContainer
                open={open}
                handleClose={handleClose}
                title="Create an Event"
                actions={
                   <Box sx={{ display: 'flex',gap:2 }}>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>

                        <Button onClick={formik.handleSubmit} variant="contained" color="primary">
                            Create
                        </Button>
                   </Box>
                }
            >
                <Box sx={{
                    display: "flex", flexDirection: "column", gap: 2, textAlign: "start"
                }}
                >
                    {
                        ['title', 'venue', 'type','date', 'timezone','form']?.map((field, index) => (
                            <FormControl key={index}>
                                <FormLabel htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
                                {
                                    field === 'type' ? (
                                        <Select
                                            id={field}
                                            name={field}
                                            value={formik.values[field]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched[field] && Boolean(formik.errors[field])}
                                            helperText={formik.touched[field] && formik.errors[field]}
                                        >
                                            <MenuItem value="virtual">Virtual</MenuItem>
                                            <MenuItem value="online">online</MenuItem>
                                        </Select>
                                    ) :
                                    field === 'timezone' ? (
                                        <Select
                                            id={field}
                                            name={field}
                                                value={formik.values[field]}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched[field] && Boolean(formik.errors[field])}
                                                helperText={formik.touched[field] && formik.errors[field]}
                                        >
                                                <MenuItem value="IST">Indian Standard </MenuItem>
                                                <MenuItem value="AST">Arabian Standard </MenuItem>
                                                <MenuItem value="CET">Central European</MenuItem>
                                                <MenuItem value="ART">Argentina Time </MenuItem>
                                        </Select>
                                    ) :
                                    field === 'form' ? (
                                        <Select
                                            id={field}
                                            name={field}
                                                value={formik.values[field]}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched[field] && Boolean(formik.errors[field])}
                                                helperText={formik.touched[field] && formik.errors[field]}
                                        >
                                                {
                                                    forms.length >0 && forms?.map((field,index)=>(
                                                        <MenuItem key={index} value={field._id}>{field.name}</MenuItem>
                                                    ))
                                                }
                                        </Select>
                                    ) : (
                                        <TextField   
                                            placeholder={`Enter your ${field}`}
                                            id={field}
                                            name={field}
                                             type={field}
                                             value={formik.values[field]}
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             error={formik.touched[field] && Boolean(formik.errors[field])}
                                             helperText={formik.touched[field] && formik.errors[field]}
                                        />
                                    )
                                }
                            </FormControl>
                        ))
                    }
                </Box>
            </ModalContainer>
        </div>
    );
};

AddModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default AddModal;