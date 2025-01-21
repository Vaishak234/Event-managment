import { Box } from "@mui/material"
import UserSidebar from "../../components/ui-users/UserSidebar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getFormById } from "../../features/form/formActions"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import DisplayForm from "../../components/form/DisplayForm"

const RegisterationForm = () => {


    const {formId} = useParams()
    const dispatch = useDispatch()
    const [formData,setFormData] = useState([])

    useAxiosPrivate()


    useEffect(() => {
        const fetchData = async () => {
            if (formId) {
                const {data} = await dispatch(getFormById(formId)).unwrap()

                setFormData(data)
                
            }
        };
        fetchData();
    }, [dispatch, formId]);
    


  return (

    <Box>

          <Box sx={{ display: "flex", gap: 10 }}>

              <UserSidebar />

           <Box sx={{display:'flex' ,justifyContent:"center",alignItems:'center', flex:1 ,py:6}}>
                  {
                      formData?.name &&
                      <DisplayForm form={formData} status={'submit'} />

                  }
           </Box>

          </Box>
    </Box>
  )
}

export default RegisterationForm
