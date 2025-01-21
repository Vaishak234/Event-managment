import { Box, Button, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import InputField from "./InputField";
import { useSelectedItem } from "../../context/SelectedFormContext";
import { useDispatch } from "react-redux";
import { removeFormElement } from "../../features/custormForm/customFormSlice";

const FieldRows = ({ item ,isPreview = true ,handleChange }) => {
    
    const { selectedItem, setSelectedItem } = useSelectedItem();
    const dispatch = useDispatch()

    const handleDelete = (item) => {
        
        dispatch(removeFormElement(item?.id))
    };
    
  

    const handleEdit = () => {
        
        setSelectedItem(item.id);
    };

    const getWidthClass = (width) => {
        switch (width) {
            case 1:
                return '100%';
            case 2:
                return '50%';
            default:
                return '33%';
        }
    }

   

    const includesArray = ['submit']

    return (
        <Box
           
            sx={{
                cursor: "pointer",
                px: 2,
                py: 1,
                outline: selectedItem === item.id ? "2px solid #000" : "none"
            }}
        >
           <Box sx={{display:"flex",justifyContent:"space-between"}}>

            {
                !includesArray.includes(item.name) && (

                        <Typography variant="h6" color="initial">
                            {item.name.toUpperCase()}
                            {item?.required && <span style={{ color: 'red' }}> *</span>}
                        </Typography>
                )
            }

               <Box>
                    {
                        !isPreview && (
                            <>

                                <Button onClick={handleEdit}>Edit</Button>

                                <Button onClick={()=>handleDelete(item)}>delete</Button>

                            </>
                        )
                    }
               </Box>
           </Box>
            <Box sx={{ width: '100%' }}>
                {item?.fields.map((field, index) => (
                    <InputField key={field.id + '_index_' + index} field={field}  handleChange={handleChange}/>
                ))}
            </Box>

            
        </Box>
    );
};

FieldRows.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        required: PropTypes.bool,
        fields: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    isPreview: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default FieldRows;
