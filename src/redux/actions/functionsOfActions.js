import {LOAD_BY_FILTER, LOAD_GENRES, LOAD_MOVIES} from "./actions";

const loadMovies = (payload) => {
    return {type: LOAD_MOVIES, payload}
}

const loadGenres = (payload) => {
    return {type: LOAD_GENRES, payload}
}

const loadFilteredFilms = (payload) => {
    return {type: LOAD_BY_FILTER, payload}
}

export {loadMovies, loadGenres, loadFilteredFilms}