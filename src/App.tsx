import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import LayoutReactor from './Layout/Layout-reactor/LayoutReactor';
import LayoutSetting from './Layout/Layout-setting/LayoutSetting';





function App() {
  return (
    <div className="App">
      <Router>
        <Grid container direction='row'>
          <Grid item className='rightMenu'>
            <Sidebar />
          </Grid>
          <Grid item lg md>
            <Grid item lg md>
                header
            </Grid>
            <Routes>
              <Route path='/' element={<LayoutReactor />} />
              <Route path='/setting' element={<LayoutSetting />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
