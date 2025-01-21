
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const FormCard = ({ form }) => {


    return (
        <Card sx={{ maxWidth: 345, width: '100%', margin: '20px', boxShadow: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {form?.name}
                </Typography>
              
                <Typography variant="body2" color="text.secondary">
                    status : {form?.status}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/admin/form-response/${form._id}`}>Responses</Link>
            </CardActions>
        </Card>
    );
};


FormCard.propTypes = {
    form: PropTypes.shape({
        _id:PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.string,
    }).isRequired,
};

export default FormCard;
