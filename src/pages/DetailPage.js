import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteMovieRating, getMovie, getMovieState, rateMovie } from "../util/requests";
import { Button, Navbar } from 'reactstrap'


const DetailPage = () => {

    let { id } = useParams();

    const imgLink = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [movieState, setMovieState] = useState({});

    const addRating = async () => {
        let score = prompt('What is your rating');
        let res = await rateMovie(id, score);

        let state = await(getMovieState(id));
        setMovieState(state);
        setLoading(true);
    }

    const deleteRating = async () => {
        let res = await deleteMovieRating(id);
        
        let state = await(getMovieState(id));
        setMovieState(state);
        setLoading(true);
    }

    useEffect(() => {
        const getMovieInfo = async () => {
            let res = await getMovie(id);
            setMovie(res);
        };

        const getStateInfo = async () => {
            let res = await getMovieState(id);
            setMovieState(res);
        }
        getMovieInfo();
        getStateInfo();

        setLoading(false);
    }, [isLoading]);


    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <Navbar>
                    <Button href='/' color='danger'>Go back</Button>
                </Navbar>
                <img src={imgLink + movie.poster_path} alt="" width="40%" height="40%"></img>
                <div style={{ padding: 20 }}><h3>{movie.original_title}</h3></div>
                <p>Your rating: {movieState.rated ? movieState.rated.value : 'Not yet rated'}
                <br></br>
                {movieState.rated && <><Button onClick={deleteRating} color='danger'>Delete rating</Button></>}
                {!movieState.rated && <><Button onClick={addRating} color='primary'>Add rating</Button></>}
                </p>
                <p>Original language: {movie.original_language}</p>
                <p>Overview: {movie.overview ? movie.overview : 'Not available'}</p>
                <p>Release date: {movie.release_date}</p>
                <p>Average Rating: {movie.vote_average}</p>
                <p>Votes: {movie.vote_count}</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Budget: {movie.budget}</p>
                <p>Revenue: {movie.revenue}</p>
                <p>Status: {movie.status}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>IMDB ID: {movie.imdb_id}</p>
            </div>
        );

    }
};

export default DetailPage;