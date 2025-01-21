import { Box } from "@mui/material"
import FormElementList from "../../components/form/FormElementList"
import FormCanvas from "../../components/form/FormCanvas"
import FormEditbar from "../../components/form/FormEditbar"


const CreateFormPage = () => {

  return (
    <Box>
     


        <Box sx={{ display: "flex", gap: 2 ,justifyContent:'space-between' }}>

          <FormElementList />

          <FormCanvas />

          <FormEditbar />

        </Box>
        
      
    </Box>
  )
}

export default CreateFormPage
