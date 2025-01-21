import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { axiosPrivate } from '../../axios/axiosPrivate'
import Sidebar from '../../components/ui/Sidebar'
import ResponseCard from '../../components/ui-users/ResponseCard'


const FormResponses = () => {


  const { formId } = useParams()
  const dispatch = useDispatch()
  const [responseData, setResponseData] = useState([])

  useAxiosPrivate()


  useEffect(() => {
    const fetchData = async () => {
      if (formId) {
        const { data } = await axiosPrivate.get('/form/response/'+formId)
        
        if(data?.data){
          setResponseData(data?.data)
        }
        
      }
    };
    fetchData();
  }, [dispatch, formId]);


  return (
    <Box>

      <Box sx={{ display: "flex", gap: 2 }}>

        <Sidebar />

        <Box sx={{display:'flex',flexWrap:'wrap',gap:3,height:"100px"}}>

            { responseData.length > 0 &&
              responseData?.map((response, index) => (
                <ResponseCard key={index} response={response} />
              ))

            }
        </Box>
     

      </Box>


    </Box>
  )
}

export default FormResponses
