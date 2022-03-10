import { createTheme, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import LayoutReactor from './Layout/Layout-reactor/LayoutReactor';
import LayoutSetting from './Layout/Layout-setting/LayoutSetting';
//install Fonts
import Yekan from './Assets/Styles/Yekan.woff'
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontFamily: 'yekan'
    },
   
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'yekan';
        src: local('yekan'), url(${Yekan}) format('woff');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      },
      `
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Grid container direction='row'>
            <Grid item className='rightMenu'>
              <Sidebar />
            </Grid>
            <Grid item lg md>
              <Grid item lg md>
                <Header />
              </Grid>
              <Routes>
                <Route path='/' element={<LayoutReactor />} />
                <Route path='/setting' element={<LayoutSetting />} />
              </Routes>
            </Grid>
          </Grid>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
