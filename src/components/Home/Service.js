import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Service = ({ service }) => {
    const imgLink = `/images/${service.img}`
    return (
        <Card sx={{ minWidth: 275,boxShadow: 0, border:0}}>
            <CardMedia
                component="img"
                height="194"
                style={{width:'auto',height:'80px', margin:'0 auto'}}
                image={imgLink}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {service.description}
                </Typography>
            </CardContent>
            
        </Card>
    )
}

export default Service
