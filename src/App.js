import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import MoviePage from './pages/MoviePage';
import SuccessPage from './pages/SuccessPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MoviePage/>}/>
      <Route path='/success' element={<SuccessPage/>}/>
    </Routes>
  );

}

export default App;
