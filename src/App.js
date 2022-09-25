import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import MoviePage from './pages/MoviePage';
import SuccessPage from './pages/SuccessPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <h1>Movie Website</h1>
        <Routes>

          <Route path='/' element={<MoviePage />} />
          <Route path='/success' element={<SuccessPage />} />

        </Routes>
      </div>
  );

}

export default App;
