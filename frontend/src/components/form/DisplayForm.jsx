import { Box, Button, Paper, Typography } from '@mui/material';
import FieldRows from './FieldRow';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { axiosPrivate } from '../../axios/axiosPrivate';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { toastError, toastSuccess } from '../../utils/toaster';
import { useNavigate } from 'react-router-dom';

const DisplayForm = ({ form, isPreview , status="none"}) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  useAxiosPrivate()

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };  
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(status !== 'submit') return;
    try {
      const values = {
        formId:form._id,
        formData:formData
      }
      const {data} = await axiosPrivate.post('/user/response',values)

      if(data){
         toastSuccess(data)
      }  
      setFormData({})
      navigate('/all-events')
    } catch (error) {
       console.log(error);
       toastError(error)
       
    }
    
  };

  return (
    <Box>
      {form?.name && (
        <Paper
          elevation={2}
          sx={{
            minHeight: '400px',
            width: '700px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 0,
            transition: 'all 0.3s ease',
            boxShadow:
              'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
          }}
        >
          <Typography variant="h4" sx={{ textAlign: 'center', pt: 4 }}>
            {form?.name}
          </Typography>

          <Box sx={{ px: 4 }} component={'form'} onSubmit={handleSubmit}>
            {form?.formFields?.map((field, index) => (
              <FieldRows
                key={field.id + '_index_' + index}
                item={field}
                isPreview={isPreview}
                handleChange={handleChange}
              />
            ))}
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

DisplayForm.propTypes = {
  form: PropTypes.shape({
    _id:PropTypes.string,
    name: PropTypes.string,
    formFields: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  }),
  isPreview: PropTypes.bool,
  status: PropTypes.string,
};

export default DisplayForm;
