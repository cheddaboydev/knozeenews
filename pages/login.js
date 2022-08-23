import { Button, Container, TextField, Stack, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../hooks/firebase'
import { useRouter } from 'next/router'

export default function Login(){

    const router = useRouter()
        const [ email, setEmail ] = useState('')
        const [ password, setPassword ] = useState('')

    function loginUser(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            router.push('/')
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    return(
        <Container maxWidth='xs' sx={{mt: 3}}>
            
        <Typography>Login</Typography>
            <Stack orientation="vertical">
                <TextField
                    placeholder="Email"
                    margin='normal'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                <TextField
                    type="password"
                    margin='normal'
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                <Button onClick={loginUser} variant='contained'>Login</Button>
            </Stack>
                  
        </Container>
    )
}