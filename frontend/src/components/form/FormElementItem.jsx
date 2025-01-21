import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import  {addFormElement}  from "../../features/custormForm/customFormSlice";
import {addFormFieldFunction} from '../../utils/addCustomFormField'

const FormElementItem = ({ title, icon, inputType }) => {

   
    const dispatch = useDispatch()
   
    const handleAddElement = () =>{
        let element = addFormFieldFunction(inputType)
        console.log(element)
        dispatch(addFormElement(element))
    }
  



    return (
        <ListItem disablePadding >
            <ListItemButton 
               sx={{borderRadius: 2, mb: 1 }} 
                onClick={handleAddElement}
             >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );
};


FormElementItem.propTypes = {
    title: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default FormElementItem;
