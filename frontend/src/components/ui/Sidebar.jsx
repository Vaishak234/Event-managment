import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import { CustomScroll } from '../../styles/CustomScroll';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useState } from 'react';
import AddModal from '../AddModal';
import AddFormModal from '../AddFormModal';
import useLogout from '../../hooks/useLogout';
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const listItems = [
    { text: 'Inbox', icon: <InboxIcon />, bgColor: 'rgb(237, 231, 246)' },
   
];

const Sidebar = () => {


     const [openAddModal ,setOpenAddModal] = useState(false)
     const [openFormModal ,setOpenFormModal] = useState(false)

     const logout = useLogout()


     const handleCloseModal = () =>{
        setOpenAddModal(prev=>!prev)
     }

     const handleCloseForm = () =>{
        setOpenFormModal(prev=>!prev)
     }

    return (
        <>
            <CustomScroll sx={{ bgcolor: 'white', width: '100%', maxWidth: 260, height: '100vh', position: '' }}>
            <nav aria-label="main mailbox folders">
                <List sx={{ bgcolor: 'white',  px: 2 }}>
                    <Box sx={{ my: 2 }}>

                        <Button variant="contained" color="primary" sx={{width:'100%',mb:2}} onClick={()=> setOpenAddModal(true)}> 
                           Create Event
                        </Button>

                        <Button variant="contained" color="primary" sx={{width:'100%',mb:2}} onClick={()=> setOpenFormModal(true)}> 
                           Create Form
                        </Button>

                            <Link to={'/admin/all-events'}>
                                <ListItem disablePadding sx={{ borderRadius: 3, p: 2, py: 1.5 }}>
                                    <ListItemIcon>
                                        <EmojiEventsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="All Events" />

                                </ListItem>
                            </Link>


                            <Link to={'/admin/all-forms'}>
                                <ListItem disablePadding sx={{ borderRadius: 3, p: 2, py: 1.5 }}>
                                    <ListItemIcon>
                                        <InsertDriveFileIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="All Forms" />

                                </ListItem>
                            </Link>



                            <Button variant="contained" color="primary" sx={{ width: '100%', mb: 2 }} onClick={logout}>
                                logout
                            </Button>

                        
                           
                        {listItems.map((item, index) => (
                            <Box key={index} sx={{my:1}}>
                                <Typography variant="h6" color="initial" sx={{ fontSize: '17px', fontWeight: 'bold',mb:1 }}>Dashboard</Typography>
                                <ListItem disablePadding sx={{ bgcolor: item.bgColor || 'inherit', borderRadius: 3, p: 2, py: 1.5}}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                       </Box>
                        ))}
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


        {
            openAddModal && ( <AddModal  open={openAddModal} handleClose={handleCloseModal}/> )
        }
        {
                openFormModal && (<AddFormModal open={openFormModal} handleClose={handleCloseForm}/> )
        }


        </>
    );
};

export default Sidebar;
