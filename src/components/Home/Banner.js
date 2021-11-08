import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: 'url(/images/bg.png)',
    height: 500,
}
const verticalCenter = {
    display: 'flex',
    height: 500,
    alignItems: 'center',

}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={6} md={6} style={{...verticalCenter, textAlign: 'left' }}>
                    <Box >
                        <Typography variant='h3'>
                            Your new Smile <br />
                            Start here
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: 14, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae quibusdam tenetur cumque quisquam tempora velit odio unde veniam quia harum laudantium, porro voluptas, sed exercitationem. Voluptate nemo omnis enim!Z
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#53E7ED' }}>Get Appiontment</Button>
                    </Box>

                </Grid>
                <Grid item xs={6} md={6} style={verticalCenter}>
                    <img style={{ width: '500px' }} src="/images/chair.png" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Banner
