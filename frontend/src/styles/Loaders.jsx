import { Box, CircularProgress } from "@mui/material"



export const BackgroundLoader = () => {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'fixed', top: 0, left: 0, right: 0
            , bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000
        }} >
            <CircularProgress color="white" size={30}/>
        </Box>
    )
}

