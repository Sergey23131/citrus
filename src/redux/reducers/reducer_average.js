import {LOAD_AVERAGE} from "../actions/actions";

let averageState = {
    averages: []
};

export const averageReducer = (state = averageState, action) => {
    switch (action.type) {
        case LOAD_AVERAGE:
            return {...state, averages: [...action.payload]}
        default:
            return state;
    }
}