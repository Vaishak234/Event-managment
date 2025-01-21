import { Box, Button, FormControl, FormLabel, TextField  } from "@mui/material";
import ModalContainer from './ui/Modal';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomFormName } from "../features/custormForm/customFormSlice";
import { useNavigate } from "react-router-dom";


const AddFormModal = ({ open, handleClose }) => {

   
    const [formName, setFormName] = useState('');
    const [error,setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNameChange = (event)=>{
        setFormName(event.target.value);
    }

    const handleSubmit  = () => {
        if (!formName) {
            setError(true)
            
        }else{
            
            dispatch(addCustomFormName({name:formName}))
            navigate('/admin/create-form')
        }

    }


    return (
        <div>
            <ModalContainer
                open={open}
                handleClose={handleClose}
                title="Create an Event"
                actions={
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>

                        <Button variant="contained" onClick={handleSubmit} color="primary">
                            Create
                        </Button>
                    </Box>
                }
            >
                <Box sx={{
                    display: "flex", flexDirection: "column", gap: 2, textAlign: "start"
                }}
                >
                            <FormControl >
                                <FormLabel > Event Name</FormLabel>
                              
                                            <TextField
                                                id={'name'}
                                                type={'text'}
                                                value={formName}
                                                onChange={handleNameChange}
                                                helperText={error && 'Provide form Name'}
                                            />
                                       
                    
                            </FormControl>
                
                    
                </Box>
            </ModalContainer>
        </div>
    );
};

AddFormModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default AddFormModal;