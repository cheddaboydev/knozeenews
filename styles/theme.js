import { createTheme } from '@mui/material'
import { grey, red, green, yellow } from '@mui/material/colors'


export const dark = createTheme({
  spacing: 5,
  palette: {
    mode: 'dark',
    background: {
      default: grey[900]
    },
    primary: {
      main: red[700]
    },
    success: {
      main: green[700]
    },
    back: {
      main: grey[800]
    },
    voted: {
      main: yellow[800]
    },
    error: {
      main: red[800]
    }
  },
  fontFamily: 'sans-serif',
 
})






export const light = createTheme({
  spacing: 5,
  palette: {
    mode: 'light',
      primary: {
        main: grey[900]
      },
      secondary: {
        main: red[900]
      },
    },
  })
  
  
 