import { Box, Button, Container } from "@mui/material";
import HomeCard from "../components/cards/homeCards";
import { SliderData } from "../components/menus/slider/data";
import ImageSlider from "../components/menus/slider/slider";
import { experimentalStyled as styled } from '@mui/material/styles';
import {CardData} from '../components/menus/slider/data'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";


export default function Home() {
  const [ articles, setArticles ] = useState([])

    useEffect(()=>{
     fetch('https://newsapi.org/v2/everything?q=crime&from=2022-09-18&sortBy=popularity&apiKey=17de43815bce4601bc14f5ac88c1a0c8')
    //  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=17de43815bce4601bc14f5ac88c1a0c8')
     .then((res)=> res.json())
     .then((json)=> setArticles(json.articles))
    }, [])


  return (
    <Container maxWidth="md">
      <ImageSlider slides={SliderData} />
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Box >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {articles.map((article, index) => (
          <Grid item xs={8} sm={4} md={4} key={index}>
            <HomeCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Button fullWidth sx={{mt: 2}} variant="contained">Read More</Button>
    </Box>

    
   
      </Box>
    </Container>
  )
}
