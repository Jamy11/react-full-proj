import { Container, Grid } from '@mui/material'
import React from 'react'
import Calender from '../../pages/shared/Calender'

const AppiontmentHeader = ( { date, setDate } ) => {
    // const [date, setDate] = React.useState(new Date());
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '500px' }} src="/images/chair.png" />s
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppiontmentHeader
