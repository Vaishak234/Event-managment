import FormElementItem from './FormElementItem';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { CustomScroll } from '../../styles/CustomScroll';
import { Box, Typography } from '@mui/material';

export default function FormElementList() {



    return (
        <Box sx={{ bgcolor: 'white', maxWidth: '260px', width: '100%', height: '100%', minHeight: '100vh' }}>
            <CustomScroll sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight={'bold'} color="initial" sx={{ m: 2 }}>Add Elements</Typography>

                <FormElementItem icon={<PersonIcon />} title={'Name'} inputType={'name'} />
                <FormElementItem icon={<EmailIcon />} title={'Email'} inputType={'email'} />
                <FormElementItem icon={<TextFieldsIcon />} title={'Text'} inputType={'text'} />
                <FormElementItem icon={<LocalPhoneIcon />} title={'Phone'} inputType={'phone'} />
                <FormElementItem icon={<LocationOnIcon />} title={'Address'} inputType={'address'} />
                <FormElementItem icon={<DateRangeIcon />} title={'Date'} inputType={'date'} />
                <FormElementItem icon={<RadioButtonCheckedIcon />} title={'Radio'} inputType={'radio'} />
                <FormElementItem icon={<CheckBoxIcon />} title={'Checkbox'} inputType={'checkbox'} />
                <FormElementItem icon={<SendIcon />} title={'submit'} inputType={'submit'} />

            </CustomScroll>
        </Box>
    );
}
