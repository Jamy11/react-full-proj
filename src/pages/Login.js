import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink , useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        // const field = e.target.name;
        // const value = e.target.value;
        // const newLoginData = { ...loginData };
        // newLoginData[field] = value;
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    const handelSubmint = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                        <Typography variant='body1' gutterBottom>
                            Log In
                        </Typography>

                        <form onSubmit={handelSubmint}>
                            <TextField id="standard-basics" label="Your Email"
                                name="email" variant="standard" sx={{ width: '75%', m: 1 }}
                                onChange={handleOnChange}
                            />


                            <TextField id="standard-basic" label="Your Password"
                                type="password"
                                name="password" variant="standard" sx={{ width: '75%', m: 1 }}
                                onChange={handleOnChange}
                            />


                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
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

export default Login
