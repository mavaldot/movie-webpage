import MovieCard from "./MovieCard"

const MovieList = (props) => {

    const imgLink = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'

    return (
        <div>
            {props.movies.map((movie, index) => (
                <div className='card align-items-center'>
                    <img src={imgLink+movie.poster_path} style={{ width: '20%', height: '20%' }}></img>
                    <div className='card-body'>
                        <h5 className='card-title'>{movie.original_title}</h5>
                        <p className='card-text'>{movie.overview}</p>
                        <p className='card-text'>Rating: {movie.vote_average}</p>
                        <p>Votes: {movie.vote_count}</p>
                    </div>
                </div>
            )
            )}
        </div>
    );
}

export default MovieList;