import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'
import { App } from './App.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import './index.css'


let theme = createTheme({
  spacing: 10,
  palette:{
    primary:{
      main:'#1E84FC',
      dark:'#1B79E7',
    },
    secondary:{
      main:'#3E3E3E'
    },
    lightGray:{
      main:'#F9F9F9'
    }

  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ],
    light:400,
    regular:500,
    medium:600,
    bold:700,
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
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',            
    marginTop: 0,
    fontWeight: 500
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
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  </StrictMode>
)
