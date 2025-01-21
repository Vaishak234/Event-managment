import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { CustomScroll } from '../../styles/CustomScroll';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useLogout from '../../hooks/useLogout';



const UserSidebar = () => {

  
    const logout = useLogout()

    return (
        <>
            <CustomScroll sx={{ bgcolor: 'white', width: '100%', maxWidth: 260, height: '100vh' }}>
                <nav aria-label="main mailbox folders">
                    <List sx={{ bgcolor: 'white', px: 2 }}>
                        <Box sx={{ my: 2 }}>




                            <Box sx={{ my: 1 }}>

                                <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    Events
                                </Typography>

                                <Link to={'/all-events'}>
                                    <ListItem disablePadding sx={{ borderRadius: 3, p: 2, py: 1.5 }}>
                                        <ListItemIcon>
                                            <EmojiEventsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="All Events" />

                                    </ListItem>
                                </Link>


                                <Button variant="contained" color="primary" sx={{ width: '100%', mb: 2 }} onClick={logout}>
                                    logout
                                </Button>


                            </Box>

                        </Box>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </CustomScroll>



        </>
    );
};

export default UserSidebar;
