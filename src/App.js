import './App.css';
import MoviePage from './pages/MoviePage';
import SuccessPage from './pages/SuccessPage';
import DetailPage from './pages/DetailPage';
import AuthPage from './pages/AuthPage';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Button } from 'reactstrap';

function App() {

  return (
      <div className="App">
        <Navbar>
          <Button color='primary' href='/'>Home</Button>
          <Button href='/auth'>Authenticate</Button>
          
        </Navbar>
        <h1 href='/' style={{cursor: 'pointer'}}>Movie Website</h1>
        <Routes>

          <Route path='/' element={<MoviePage />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/auth' element={<AuthPage/>}></Route>
          <Route path='/details/:id' element={<DetailPage/>}/>

        </Routes>
      </div>
  );

}

export default App;
