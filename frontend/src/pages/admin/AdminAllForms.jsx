import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import EventCard from '../../components/ui-users/EventCard'
import { selectAllForms } from '../../features/form/formSlice'
import { getAllForm } from '../../features/form/formActions'
import Sidebar from '../../components/ui/Sidebar'
import FormCard from '../../components/ui-users/FormCard'


const AdminAllForms = () => {


    const dispatch = useDispatch()
    useAxiosPrivate()

    const forms = useSelector(selectAllForms)

  

    useEffect(() => {

        dispatch(getAllForm())

    }, [dispatch])




    return (
        <Box>

            <Box sx={{ display: "flex", gap: 2 }}>

                <Sidebar />


                <Box sx={{ display: 'flex', flexWrap: "wrap" ,gap:3 }}>
                    {
                        forms?.length > 0 && forms?.map((form, index) => (

                            <Box key={index}>
                                <FormCard form={form} />
                            </Box>

                        ))
                    }
                </Box>

            </Box>


        </Box>
    )
}

export default AdminAllForms
