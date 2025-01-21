
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {


    return (
        <Card sx={{ maxWidth: 345,width:'100%', margin: '20px', boxShadow: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {event?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    TimeZone : {event?.timezone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    type : {event?.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    date : {event?.date}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/form/${event?.form}`}>Registeration Form</Link>
            </CardActions>
        </Card>
    );
};
EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string,
        timezone: PropTypes.string,
        type: PropTypes.string,
        form: PropTypes.string,
        date: PropTypes.string,
    }).isRequired,
};

export default EventCard;
