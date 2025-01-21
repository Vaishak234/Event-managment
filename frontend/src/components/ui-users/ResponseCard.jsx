
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';



const ResponseCard = ({ response }) => {


    return (
        <Card sx={{ maxWidth: 345, width: '100%', margin: '20px', boxShadow: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    form :{response?.formId?.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    user : {response?.userId?.name}
                </Typography>
            </CardContent>
          
        </Card>
    );
};


ResponseCard.propTypes = {
    response: PropTypes.shape({
        formId: PropTypes.string,
        userId: PropTypes.string,
    })
};

export default ResponseCard;
