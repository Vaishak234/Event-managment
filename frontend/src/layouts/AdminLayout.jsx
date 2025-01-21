import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from '../components/ui/Header'

const AdminLayout = () => {


    return (
        <Box sx={{ backgroundColor: "primary.light", minHeight: "100vh" }} >
            <Header />

            <main>

                <Outlet />
            </main>

            <Toaster />
        </Box>
    )
}

export default AdminLayout
