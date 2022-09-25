import MovieCard from './MovieCard';
import {Col, Row, Card, CardImg, CardTitle, CardText} from 'reactstrap';

const MovieList = (props) => {

    const imgLink = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

    const onClick = () => {
        alert("You have clicked");
    };

    return (
        <Row>
            {props.movies.map((movie, index) => (
                <Col xs="4" key={index}>
                    <Card onClick={onClick}>
                        <CardImg top width="100%" src={imgLink+movie.poster_path}></CardImg>
                        <h5>{movie.original_title}</h5>
                        <CardText>{movie.overview}</CardText>
                        <CardText>Rating: {movie.vote_average}</CardText>
                        <CardText>Votes: {movie.vote_count}</CardText>
                    </Card>
                </Col>
            ))
            }
        </Row>

    );
}

export default MovieList;