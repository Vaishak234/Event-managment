import { Box } from "@mui/material"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import UserSidebar from "../components/ui-users/UserSidebar"

const HomePage = () => {


    useAxiosPrivate()



  return (
    <Box>
        
        
       <UserSidebar />



           
    </Box>
  )
}

export default HomePage
