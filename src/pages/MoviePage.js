const MoviePage = (props) => {

    const [movieList, setMovieList] = useState([]);

    const getMovies = async () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
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

}

export default MoviePage;