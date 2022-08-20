import '../styles/globals.css'
import TopMenu from '../components/menus/topMenu'
import { Box, CssBaseline, Divider, ThemeProvider, Container } from '@mui/material'
import { dark, light } from '../styles/theme'
import Image from 'next/image'
import logo from '../public/logo.png'
import { Footer } from '../components/footer/footer'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider theme={light}>
    <CssBaseline />
    <Container maxWidth="md">
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Image src={logo} style={{zIndex: 1}} width={150} height={150}  />
    </Box>
    <Divider />
          <TopMenu />
          <Component {...pageProps} />
          <Footer />
    </Container>
    </ThemeProvider>
  )
}

export default MyApp
