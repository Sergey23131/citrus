import {LOAD_MOVIES} from "./actions";

let initialState = {movies: []};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {...state, movies: [...action.payload]}
        default:
            return state;
    }
}