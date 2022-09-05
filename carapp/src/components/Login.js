import { Button, Snackbar, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { SERVER_URL } from "../constants/constants";
import CarList from "./carlist";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setAuth] = useState(false);
    const handleChange = (event) => {
        setUser({...user, 
            [event.target.name] : event.target.value});
    }
    const login = () => {
        fetch(SERVER_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => {
            const jwtToken = res.headers.get
            ('Authorization');
        if (jwtToken !== null) {
            sessionStorage.setItem("jwt", jwtToken);
            setAuth(true);
            }
        else {
            setOpen(true);
        }
        })
        .catch(err => console.error(err))
       }

    const [open, setOpen] = useState(false);
    const log = () => {
        sessionStorage.removeItem("jwt");
        setAuth(false);
       }
    // const login = () => {
    //     fetch(SERVER_URL + 'login', {
    //         method: 'POST',
    //         headers: { 'Content-Type':'application/json' },
    //         body: JSON.stringify(user)
    //     })
    //     .then(edRes => {
    //         const jwtToken = edRes.headers.get('Authorization');
    //         if (jwToken !== null) {
    //             sessionStorage.setItem("jwt", jwToken);
    //             setAuth(true);
    //         }
    //     })
    //     .catch(err) = console.error(err)
    // }
    
    if(isAuthenticated){
        return (
        <div>
            <CarList/>
            <Stack mt={1} mb={2} alignItems="center">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={log}>Logout</Button>
            </Stack>
        </div>);
    }
    else{
        return (
            <div>
                <Stack  spacing={2} alignItems='center' mt={2}>
                    <TextField
                        name="username"
                        label="Username"
                        onChange={handleChange}/>
                    <TextField
                        name="password"
                        label="Password"
                        onChange={handleChange}/>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={login}>
                        Login</Button>
                </Stack>
                <Snackbar open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message="Login failed: Check your username and 
                    password" />
            </div>
        )
    }
}

export default Login;