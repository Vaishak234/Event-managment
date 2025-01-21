import { Box, Typography, TextField } from "@mui/material";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const EditFieldRow = ({ field,type, handleChange }) => {
  const labelRef = useRef(field.label)
  const [inputValue,setInputValue] = useState()

  console.log(field);
  

  useEffect(()=>{
    if(type === 'placeholder'){
      setInputValue(field.placeholder)
    }else{
      setInputValue(field.label)
    }
  },[field.label, field.placeholder, type])
  

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    handleChange({ type, newValue, subId: field.id });
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
      <Typography variant="h6" color="initial">{labelRef.current}</Typography>
      <TextField
    
        value={inputValue}
        onChange={handleInputChange}
      />
    </Box>
  );
};

EditFieldRow.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EditFieldRow;
