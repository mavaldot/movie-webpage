const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require('axios').default;
const sessionId = sessionStorage.getItem('sessionId');

export async function getPopularMovies(pageNum) {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}`;
    const response = await axios.get(url);
    return response.data;
}

export async function getTopRatedMovies(pageNum) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&vote_count.gte=20&sort_by=vote_average.desc&page=${pageNum}`;
    const response = await axios.get(url);
    return response.data;
}

export async function getLatestMovies(pageNum) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${pageNum}`;
    const response = await axios.get(url);
    return response.data;
}

export async function getGenreMovies(pageNum, gen) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${gen}&language=en-US&sort_by=popularity.desc&page=${pageNum}`;
    const response = await axios.get(url);
    console.log(gen);
    console.log(response);
    return response.data;
}

export async function getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
}

export async function getMovieState(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/account_states?api_key=${API_KEY}&session_id=${sessionId}`;
    const response = await axios.get(url);
    return response.data;
}

export async function rateMovie(id, rating) {
    const url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
    const res = await axios.post(url, {
        value: rating
    }).catch((error) => {
        if (error.response) {
            if (error.response.status === 400) {
                alert("Please enter a valid input (a number between 0 and 10)");
            }
            if (error.response.status === 401) {
                alert("ERROR. You are not authenticated for this session or your credentials have expired. Please authenticate yourself.");
            }
        }
    });

    return res;
}

export async function deleteMovieRating(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
    const res = await axios.delete(url)
        .catch((error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    alert("ERROR. You are authenticated or your credentials have expired. Please authenticate yourself again.");
                }
            }
        });

    return res;
}

export async function getGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const res = await axios.get(url);

    return res.data;
}

