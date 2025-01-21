import { Box, FormControlLabel, Switch, Typography, TextField, Button } from '@mui/material';
import EditFieldRow from './EditFieldRow';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormFieldById, updateFormField } from '../../features/custormForm/customFormSlice';
import AddIcon from '@mui/icons-material/Add';
import { CustomScroll } from '../../styles/CustomScroll';
import { useSelectedItem } from '../../context/SelectedFormContext';


const FormEditBar = () => {
  // Retrieve the selected item from context
  const { selectedItem } = useSelectedItem()
  
  // Initialize the dispatch function from Redux
  const dispatch = useDispatch();

  // find the selected field from state 
  const selectedField = useSelector((state) => selectFormFieldById(state, selectedItem));

  console.log(selectedField);
  

  // Handle the switch change event
  const handleSwitchChange = ({ type, newValue }) => {
    // Dispatch the updateFormField action with the new value
    let id = selectedField.id;
    dispatch(updateFormField({ type, id, newValue }));
  };

  const handleChange = ({ type, newValue, subId }) => {
    let id = selectedField.id
    dispatch(updateFormField({ type, id, newValue, subId }))

  }

  console.log(selectedField?.required);


  return (
    <Box>
      <CustomScroll sx={{ width: '100%', minWidth: 350, bgcolor: 'white', minHeight: "calc(100vh - 75px)", p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {/* Placeholder for future title or header */}
        </Box>
        {selectedField && (
          <Box sx={{ py: 4 }}>
            {/* Display the name of the selected item in capital case */}
            <Typography variant="h6" color="initial">Field Label</Typography>
            <TextField id="" label="" value={selectedField.name} onChange={(e) => handleChange({ type: 'label', newValue: e.target.value })} />

            <Box sx={{ p: 2 }}>
              {/* Switch to toggle the 'required' property of the selected item */}
              <Typography variant="body1" color="initial">Required</Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={selectedField.required ? true : false}
                    onChange={(e) => handleSwitchChange({ type: 'required', newValue: e.target.checked })}
                  />
                }
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, my: 2 }}>
              <Button variant='contained' onClick={() => handleChange({ type: 'width', newValue: 1 })}>W-1</Button>
              <Button variant='contained' onClick={() => handleChange({ type: 'width', newValue: 2 })}>W-2</Button>
              <Button variant='contained' onClick={() => handleChange({ type: 'width', newValue: 3 })}>W-3</Button>
            </Box>

            {/* <Box sx={{ p: 2, bgcolor: "secondary.light", display: "flex", gap: 1, borderRadius: 2, justifyContent: 'space-between' }}>
              <Typography variant="body1" color="initial">Add Field</Typography>
              <AddIcon />
            </Box> */}

            <Box sx={{ p: 2 }}>
              {/* Render the fields of the selected item */}
              <Typography variant="body1" color="initial">Sublabels</Typography>
              {selectedField.fields.map((field, index) => (
                <EditFieldRow key={field.id + '_index_' + index} field={field} type={'sublabel'} handleChange={handleChange} />
              ))}
            </Box>

            <Box sx={{ p: 2 }}>
              {/* Render the fields of the selected item */}
              <Typography variant="body1" color="initial">Placeholder</Typography>
              {selectedField.fields.map((field, index) => (
                <EditFieldRow key={field.id + '_index_' + index} field={field} type={'placeholder'} handleChange={handleChange} />
              ))}
            </Box>
          </Box>
        )}
      </CustomScroll>
    </Box>
  );
};

export default FormEditBar;
