import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'
import App from './App.jsx'
import './index.css'


let theme = createTheme({
  spacing: 10,
  palette:{
    primary:{
      main:'#1E84FC',
      dark:'#1B79E7',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ],
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
    h1:{
      fontSize:'2rem',
      color: "#3E3E3E"
    },
    h2:{
      fontSize:'1.5rem',
      color: "#3E3E3E"
    },
    h3:{
      fontSize:'1rem',
      color: "#656565"
    },
    button:{
      textAlign: 'center',
      textTransform:'none'
    },

  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },  
    },
  },

});

theme = responsiveFontSizes(theme)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
