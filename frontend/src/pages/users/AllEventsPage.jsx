import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllEvents} from '../../features/event/eventActions'
import { selectEvents } from '../../features/event/eventSlice'
import { Box } from '@mui/material'
import UserSidebar from '../../components/ui-users/UserSidebar'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import EventCard from '../../components/ui-users/EventCard'

const AllEventsPage = () => {

    const dispatch = useDispatch()
    useAxiosPrivate()

    const events = useSelector(selectEvents)

    useEffect(() => {

        dispatch(getAllEvents())

    }, [dispatch])


    console.log(events);
    

    return (

        <Box>

         <Box sx={{display:"flex",gap:2}}>

            <UserSidebar />


           <Box sx={{display:'flex',flexWrap:"wrap" , gap:3}}>
                    {
                        events?.length > 0 && events?.map((event, index) => (

                            <Box key={index}>
                                <EventCard event={event} />
                            </Box>

                        ))
                    }
           </Box>

         </Box>


        </Box>
    )
}

export default AllEventsPage
