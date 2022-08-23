import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Dashboard, Home, Login, Logout } from '@mui/icons-material';
import { useRouter } from 'next/router'
import { auth } from '../../hooks/firebase'
import { signOut } from 'firebase/auth';


const TopMenu = () => {

  const router = useRouter()
    function logoutUser(){
      
        signOut(auth)
        router.push('/login')
    }



  return (
    <Box sx={{my: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <Button onClick={()=> router.push('/')} startIcon={<Home />} color="secondary" size="small" variant="contained" >Home</Button>
        <Button size="small" >News</Button>
        <Button size="small" >Music</Button>
        <Button size="small" >Memes</Button>
        <Button size="small" >Fashion</Button>
        <Button size="small" >Sex Talk</Button>
        <Button size="small" >Crime</Button>

        {auth.currentUser ? 
        <>
        <Button onClick={()=> router.push('/dashboard')} size="small" variant="contained" startIcon={<Dashboard />}>Dashboard</Button>
        <Button onClick={logoutUser} size="small" variant="contained" startIcon={<Logout />}>Logout</Button>
        </>
          :
        <Button onClick={()=> router.push('/login')} size="small" variant="outlined" startIcon={<Login />}>Login</Button>
      }
    </Box>
  );
};
export default TopMenu;
