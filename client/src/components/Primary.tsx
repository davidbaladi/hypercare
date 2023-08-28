import { Grid } from '@mui/material'
// const moment = require('moment-timezone');

interface Props {
    title: string;
    timeStamp: string;
}

const Primary = ({ title, timeStamp }: Props) => {
    const dateString = timeStamp;
    const dateObject = new Date(dateString);

    // Convert to AM/PM time format
    const formattedTime = dateObject.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });

    // const dateObject = moment.utc(dateString);

    // const formattedTime = dateObject.tz('America/New_York').format('YYYY-MM-DD h:mm:ss A');

    return (
        <Grid container>
            <Grid item xs={9}>
                {title}
            </Grid>
            <Grid item xs={3}>
                {formattedTime}
            </Grid>
        </Grid>
    )
}

export default Primary