import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../Image/login.png'
import useAuth from '../../Hook/UseAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user,loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e => {
        loginUser(loginData.email , loginData.password , location , navigate);
        e.preventDefault();
    }
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                   { !isLoading && <form  onSubmit={handleLoginSubmit} >
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            variant="standard" 
                            onChange={handleOnChange}
                            />
                                                      

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                      
                    </form>}
                    { isLoading && <CircularProgress color="secondary" />}
                    {user?.email && <Alert severity="success">User create Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                   
                  
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Login;