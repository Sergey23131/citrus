import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmNkMGUwNzE0NWU5MmVjNDFlNGZkNmUzMzA0NDVlNSIsInN1YiI6IjYxMmZiZDQ5ZjYyMWIyMDA4OTQ0OTA0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZU7MrDN0Pl6hEMCHiXXTibBrW71hC5jisbxhF7oCloc'
    }
});

const discoverMovie = () => instance.get('discover/movie?page=1')


const averageOfMovies=()=> instance.get('genre/movie/list')

export {discoverMovie,averageOfMovies}