import { Box, Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { clearForm, selectCustomForm } from "../../features/custormForm/customFormSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createForm } from "../../features/form/formActions";
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { toastError, toastSuccess } from '../../utils/toaster'
import DisplayForm from "./DisplayForm";

const FormCanvas = () => {


    const form = useSelector(selectCustomForm)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useAxiosPrivate()

    useEffect(()=>{
        
        if(!form?.name){
            navigate('/admin')
        }
    },[navigate ,form?.name])


    const handleCreateForm = async (form) => {
        if (!form?.formFields?.length) {
            return toastError({ message: 'Please add at least one field' });
        }
        try {
            const response = await dispatch(createForm(form)).unwrap();
            toastSuccess(response);
            navigate('/admin');
            dispatch(clearForm());
        } catch (error) {
            console.error(error);
            toastError(error);
        }
    }


  return (
     <Box>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column",p:5 }}>
              <Box sx={{ display: "flex", justifyContent: "end", width: "100%", maxWidth: "700px", mb: 2, gap: 2 }}>
                  <Button variant="contained"  >Live Preview</Button>
                  <Button variant="contained" startIcon={<SendIcon /> } onClick={()=>handleCreateForm(form)} >Publish</Button>
              </Box>

            <DisplayForm form={form} isPreview={false}/>


          </Box>

     </Box>
  )
}

export default FormCanvas
