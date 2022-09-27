import MovieList from '../components/MovieList'
import { useState, useEffect } from 'react';

import { Container } from 'reactstrap';

import { getLatestMovies, getPopularMovies, getTopRatedMovies, getGenreMovies } from '../util/requests';

import "bootstrap/dist/css/bootstrap.css";
import MovieTabs from '../components/MovieTabs';


const MoviePage = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sort, setSort] = useState('popular');
    const [genre, setGenre] = useState(1);

    useEffect(() => {
        const getMovies = async (pageNum, movieSort, gen) => {
            let movies = {};
            switch (movieSort) {
                case 'top':
                    movies = await getTopRatedMovies(pageNum);
                    break;
                case 'latest':
                    movies = await getLatestMovies(pageNum);
                    break;
                case 'genre':
                    movies = await getGenreMovies(pageNum, gen);
                    break;
                default:
                    movies = await getPopularMovies(pageNum);
                    break;
    
            }
            console.log(movies);
            setMovieList(movies);
            setLoading(false);
        };
        getMovies(1, sort, genre);
        console.log(genre);
    }, [sort, genre]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <MovieTabs setSort={setSort} setGenre={setGenre}></MovieTabs>
                <Container>
                        <MovieList key={sort} movies={movieList.results}/>
                </Container>
            </div>
        );

    }

}

export default MoviePage;