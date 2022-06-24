import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../Image/login.png'
import useAuth from '../../Hook/UseAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();

    const {user, registerUser , isLoading ,authError } = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match ')
            return
        }
        registerUser(loginData.email , loginData.password , loginData.name , navigate)
        e.preventDefault();
    }
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                   { !isLoading &&  <form  onSubmit={handleLoginSubmit} >
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type='name'
                            onChange={handleOnChange}
                            variant="standard" />
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-Password"
                            type="password"
                            name="password2"
                            variant="standard" 
                            onChange={handleOnChange}
                            />
                                                      

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered ? please login</Button>
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

export default Register;