import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(/images/appointment-bg.png)`,
    backgroundColor: 'rgba(45, 58, 74, .9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppionmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <img style={{ width: '400px', marginTop: '-120px' }} src='/images/doctor.png' />
                </Grid>
                <Grid item xs={6} md={4} sx={{display:'flex', justifyContent:'flex-start',
            textAlign:'left' }}>
                    <Box>
                        <Typography variant='h6' sx={{mb:6}} style={{ color: '#53E7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4'  style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{my:6}} style={{ color: 'white', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat hic possimus nobis sequi, veritatis accusamus!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#53E7ED' }}>Learn More</Button>
                    </Box>


                </Grid>

            </Grid>
        </Box>
    )
}

export default AppionmentBanner
