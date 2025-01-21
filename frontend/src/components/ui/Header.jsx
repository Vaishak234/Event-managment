import { AppBar, Container, Toolbar, Typography, IconButton, Box,  Avatar } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from "react-router-dom";


const Header = () => {



    return (
        <AppBar sx={{ bgcolor: "white", boxShadow: "none", height: "70px", borderBottom: "1px solid rgba(0,0,0,0.1)" }} position="sticky">
            <Container maxWidth="xl" >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
                    <Link to={'/admin'}>
                        <Typography variant="h4" fontWeight={'bold'} color="initial">Event Managment</Typography>
                    </Link>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      

                        <IconButton >
                            <HelpOutlineIcon />
                        </IconButton>

                        <Avatar />

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
