import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { registerUser, isLoading } = useAuth()
    const handleOnBlur = e => {
        // const field = e.target.name;
        // const value = e.target.value;
        // const newLoginData = { ...loginData };
        // newLoginData[field] = value;
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    const handelSubmint = (e) => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    if (isLoading) {
        return (
            <CircularProgress />

        )
    }
    console.log(loginData)
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                        <Typography variant='body1' gutterBottom>
                            Register
                        </Typography>

                        <form onSubmit={handelSubmint}>
                            <TextField id="standard-basicds" label="Your Name"
                                name="name"
                                variant="standard" sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                            />
                            <TextField id="standard-basicd" label="Your Email"
                                name="email"
                                type="email" variant="standard" sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                            />


                            <TextField id="standard-basics" label="Your Password"
                                type="password"
                                name="password" variant="standard" sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                            />
                            <TextField id="standard-basicsds" label="Confirm Password"
                                type="password"
                                name="password2" variant="standard" sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                            />

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Register? Please Log IN</Button>
                            </NavLink>
                            <Button variant="contained" type="submit" sx={{ width: '75%', m: 1 }}>Submit</Button>
                        </form>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src='/images/login.png' />
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Register
