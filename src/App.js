import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import {useState, useEffect} from 'react'

console.log(process.env);

function App() {

  const [movieList, setMovieList] = useState([]);

  const [dog, setDog] = useState('');

  const [isLoading, setLoading] = useState(true);

  console.log("wasusp");
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_HELLO);
  console.log("helo");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    console.log('inside');
    setMovieList(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();

  }, [])


  if (isLoading) {
    return <div className='App'>Loading...</div>
  }
  else {
    return (
      <div className="App">
        <div>
        <p>{movieList.original_title}</p>
        <p>Hello</p>
        <MovieList movies={movieList.results}/>
        </div>
      </div>
    );

  }

}

export default App;
