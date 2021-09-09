import {LOAD_GENRES} from "../actions/actions";

let genresState = {
    genres: null
};

export const genresReducer = (state = genresState, action) => {
    switch (action.type) {
        case LOAD_GENRES:
            return {...state, genres: [...action.payload.genres]}
        default:
            return state;
    }
}