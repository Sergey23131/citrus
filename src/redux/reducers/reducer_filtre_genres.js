import {LOAD_BY_FILTER} from "../actions/actions";


let initialState = {
    filtered: null
};

export const reducer_genres = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BY_FILTER:
            return {...state, filtered: [...action.payload.results]}
        default:
            return state;
    }
}