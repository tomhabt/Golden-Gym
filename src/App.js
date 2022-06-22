import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
>


function App() {
  return (
  <Box width='400px'sx={{width:}}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/exercise:id' element={<ExerciseDetail></ExerciseDetail>} />
    </Routes>
    <Footer />
  </Box>
  );
}

export default App;
