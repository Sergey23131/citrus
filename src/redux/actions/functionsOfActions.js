import { LOAD_GENRES, LOAD_MOVIES} from "./actions";

const loadMovies = (payload) => {
    return {type: LOAD_MOVIES, payload}
}

const loadGenres = (payload) => {
    return {type: LOAD_GENRES, payload}
}

export {loadMovies, loadGenres}