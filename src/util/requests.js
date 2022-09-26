const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require('axios').default;

export async function getPopularMovies(pageNum) {
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}`;
    const response =  await axios.get(url);
    return response.data;
}

export async function getTopRatedMovies(pageNum) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&vote_count.gte=20&sort_by=vote_average.desc&page=${pageNum}`;
    const response =  await axios.get(url);
    return response.data;
}

export async function getLatestMovies(pageNum) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${pageNum}`;
    const response =  await axios.get(url);
    return response.data;
}

export async function getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
}

export async function getState(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/account_states?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}