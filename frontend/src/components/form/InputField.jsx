import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, Select, TextField } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";

const InputField = ({ field , handleChange}) => {
    const { id, label,name, placeholder, type, checked, options, w } = field;
    


    const [personName, setPersonName] = useState([]);

    // const handleChange = (event) => {
    //     const value = event.target.value
    //     setPersonName(

    //         typeof value === 'string' ? value.split(',') : value,
    //     );
    // };

    const handleInputChange = (value)=>{
       handleChange(name+ '-'+id , value)
    }


    return (
        <Box sx={{ my: 2, }}>
            <FormControl variant="outlined" sx={{ width: '100%' }}>
                {type === "checkbox" ? (
                    <FormControlLabel control={<Checkbox defaultChecked={checked} />} label={label} onChange={(e) => handleInputChange(e.target.checked)} />
                ) : type === "radio" ? (
                        <FormControlLabel control={<Radio checked={checked} />} label={label} onChange={(e) => handleInputChange(e.target.checked)} />
                ) : type === "select" ? (
                    <>
                        <InputLabel id={`${id}-label`}>{label}</InputLabel>
                        <Select
                            labelId={`${id}-label`}
                            id={id}
                            multiple
                            value={personName}
                             onChange={(e) => handleInputChange(e.target.value)}
                            input={<OutlinedInput id={`${id}-select`} label={label} />}

                        >
                            {options.map(({ name, value }) => (
                                <MenuItem key={value} value={value}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </>
                ) : type === "button" ? (
                    <>

                        <Button variant="contained" type="submit" >Submit</Button>
                    </>
                ) : (
                    <>
                        <FormLabel htmlFor={id}>{label}</FormLabel>
                        <TextField
                            required
                            fullWidth
                            id={id}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            variant="outlined"
                            onChange={(e)=>handleInputChange(e.target.value)}
                        />
                    </>
                )}
            </FormControl>
        </Box>
    );
};

InputField.propTypes = {
    field: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        type: PropTypes.oneOf(['checkbox', 'radio', 'dropdown', 'text']).isRequired,
        checked: PropTypes.bool,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
     handleChange: PropTypes.func.isRequired,
};

export default InputField;
