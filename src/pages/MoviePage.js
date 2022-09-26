import MovieList from '../components/MovieList'
import { useState, useEffect } from 'react';

import { Container } from 'reactstrap';

import { getLatestMovies, getPopularMovies, getTopRatedMovies } from '../util/requests';

import "bootstrap/dist/css/bootstrap.css";
import MovieTabs from '../components/MovieTabs';


const MoviePage = (props) => {

    const APPURL = process.env.REACT_APP_URL;
    let sessionId = sessionStorage.getItem('sessionId') || '';

    // const axios = require('axios').default;
    // const API_KEY = process.env.REACT_APP_API_KEY

    const [movieList, setMovieList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sort, setSort] = useState('popular');

    useEffect(() => {
        const getMovies = async (pageNum, movieSort) => {
            let movies = {};
            switch (movieSort) {
                case 'top':
                    movies = await getTopRatedMovies(pageNum);
                    break;
                case 'latest':
                    movies = await getLatestMovies(pageNum);
                    break;
                default:
                    movies = await getPopularMovies(pageNum);
                    break;
    
            }
            setMovieList(movies);
            setLoading(false);
        };
        getMovies(1, sort);
    }, [sort]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <MovieTabs setSort={setSort}></MovieTabs>
                <Container>
                        <MovieList key={sort} movies={movieList.results}/>
                </Container>
            </div>
        );

    }

}

export default MoviePage;