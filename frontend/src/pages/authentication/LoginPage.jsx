

// project imports

import AuthLogin from '../../components/authentication/AuthLogin';
import { Box, Container } from '@mui/material';


const LoginPage = () => {


    return (
        <Box sx={{ pt: 10, pb: 10 }} >
            <Container>
                <Box sx={{maxWidth:"500px",backgroundColor:"white",borderRadius:3 ,m:"auto"}}>
                     <AuthLogin/>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;
