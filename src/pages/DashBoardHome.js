import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calender from './shared/Calender'
import Appointments from '../components/Dashboard.js/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    )
}

export default DashBoardHome
