import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { signInWithGoogle } from "../utils/firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (<Box>
        <TextField variant='outlined' label='Votre email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Button variant='outlined' color='primary' onClick={() => {
            signInWithGoogle().then(res => console.log(res));
        }}>ok</Button>
    </Box>)
}

export default Login;