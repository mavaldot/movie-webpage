import {Col, Row, Card, CardImg, Button, CardText} from 'reactstrap';

const MovieList = (props) => {

    const imgLink = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
    const errorImg = 'https://www.100daysofrealfood.com/wp-content/uploads/2011/06/popcorn1-1551x2048.jpg';

    return (
        <Row>
        {props.movies.map((movie, index) => (
            <Col xs="4" key={index}>
                <Card>
                    <CardImg top width="100%" src={movie.poster_path != null ? imgLink+movie.poster_path : errorImg}></CardImg>
                    <h5>{movie.original_title}</h5>
                    <CardText>{movie.overview}</CardText>
                    <CardText>Rating: {movie.vote_average}</CardText>
                    <CardText>Votes: {movie.vote_count}</CardText>
                    <Button color='primary' href={`/details/${movie.id}`}>Details</Button>
                </Card>
            </Col>
        ))
        }
        </Row>

    )

}

export default MovieList;