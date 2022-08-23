import { jsonEval } from "@firebase/util";
import { Avatar, Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard(){

    const [ memes, setMemes ] = useState()
    const [ loadmore, setLoadmore ] = useState(5)

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then((res)=> res.json())
        .then((json)=> setMemes(json))
    }, [])

    console.log(memes?.data.memes)

    return(
        <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>

        {memes?.data.memes.slice(0, loadmore).map(meme => (
            <Paper key={meme.id} sx={{borderRadius: 3, bgcolor: 'grey.100', width: 220, height: 220, p: 2, m: 3}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              

                    <Typography sx={{mb: 2, fontWeight: 'bold'}}>{meme.name}</Typography>
                    <Image src={meme.url} width="100" height="100" />
                    <Button sx={{mt: 2}} variant="contained" color="success">Approve</Button>
                
                </Box>
            </Paper>
        ))}
        <Button variant="contained" fullWidth onClick={()=> setLoadmore(prev => prev + 5)}>Load More Memes</Button>
        </Container>
    )
}