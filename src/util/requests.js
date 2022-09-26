const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require('axios').default;

export async function getPopularMovies(pageNum) {
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}`;
    
    const response =  await axios.get(url);
    return response.data;
    //const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
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