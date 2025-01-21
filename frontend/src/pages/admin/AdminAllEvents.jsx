import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../features/event/eventActions'
import { selectEvents } from '../../features/event/eventSlice'
import { Box } from '@mui/material'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import EventCard from '../../components/ui-users/EventCard'
import Sidebar from '../../components/ui/Sidebar'


const AdminAllEvents = () => {


    const dispatch = useDispatch()
    useAxiosPrivate()

    const events = useSelector(selectEvents)

    useEffect(() => {

        dispatch(getAllEvents())

    }, [dispatch])




  return (
      <Box>

          <Box sx={{ display: "flex", gap: 2 }}>

              <Sidebar />


              <Box sx={{ display: 'flex', flexWrap: "wrap" ,gap:3 }}>
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

export default AdminAllEvents
