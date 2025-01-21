import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    


  return (
    <Box sx={{backgroundColor:"primary.light" ,minHeight:"100vh"}} >

      
       <Outlet />
       
      <Toaster />
    </Box>
  )
}

export default MainLayout
