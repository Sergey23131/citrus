import {LOAD_MOVIES} from "./actions";


const loadMovies = (payload) => {
    return {type: LOAD_MOVIES, payload}
}

export {loadMovies}