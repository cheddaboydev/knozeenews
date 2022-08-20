import { Box, Button, Container } from "@mui/material";
import HomeCard from "../components/cards/homeCards";
import { SliderData } from "../components/menus/slider/data";
import ImageSlider from "../components/menus/slider/slider";
import { experimentalStyled as styled } from '@mui/material/styles';
import {CardData} from '../components/menus/slider/data'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Home() {
  return (
    <Container maxWidth="md">
      <ImageSlider slides={SliderData} />
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Box >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {CardData.map((article, index) => (
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
