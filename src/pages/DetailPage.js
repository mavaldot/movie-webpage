import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../util/requests";
import { Button, Navbar } from 'reactstrap'


const DetailPage = () => {

    let { id } = useParams();

    const imgLink = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [userRating, setUserRating] = useState();

    useEffect(() => {
        const getInfo = async () => {
            let res = await getMovie(id);
            setMovie(res);
        };

        const getRating = async () => {

        };

        getInfo();

        setLoading(false);
    }, []);


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
                <div></div>
                <p>Rating: {movie.vote_average}</p>
                <p>Votes: {movie.vote_count}</p>
                <p>Original language: {movie.original_language}</p>
                <p>Overview: {movie.overview}</p>
                <p>Release date: {movie.release_date}</p>
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