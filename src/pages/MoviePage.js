import MovieList from '../components/MovieList'
import { useState, useEffect } from 'react';

const MoviePage = (props) => {
    const APPURL = process.env.REACT_APP_URL;
    const axios = require('axios').default;

    let requestToken = localStorage.getItem('requestToken') || '';
    let sessionId = sessionStorage.getItem('sessionId') || '';

    const API_KEY = process.env.REACT_APP_API_KEY

    const getToken = async () => {
        const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`;
        const response = await axios.get(url);
        requestToken = response.data.request_token;

        console.log(`token`);
        console.log(requestToken);
        localStorage.setItem('requestToken', requestToken);
    }

    const authenticate = async () => {

        console.log(`sessionId ${sessionId}`);
        requestToken = '';
        if (sessionId !== '') return;
        await getToken();
        window.location.replace(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${APPURL}/success`);

    };

    useEffect(() => {
        authenticate();
    }, []);
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        const response = await fetch(url);
        const responseJson = await response.json();
        setMovieList(responseJson);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();

    }, []);

    if (isLoading) {
        return <div className='App'>Loading...</div>
    }
    else {
        return (
            <div className="App">
                <div>
                    <MovieList movies={movieList.results} />
                </div>
            </div>
        );

    }

}

export default MoviePage;