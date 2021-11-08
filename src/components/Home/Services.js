import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Floride treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Tenetur ipsa temporibus quos voluptate quasi placeat dignissimos aspernatur quia eos commodi!',
        img: 'fluoride.png'
    },
    {
        name: 'Cavity treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Tenetur ipsa temporibus quos voluptate quasi placeat dignissimos aspernatur quia eos commodi!',
        img: 'cavity.png'
    },
    {
        name: 'Whitening treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Tenetur ipsa temporibus quos voluptate quasi placeat dignissimos aspernatur quia eos commodi!',
        img: 'whitening.png'
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m:2, color:'success. main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m:2 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service service={service}></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Services
