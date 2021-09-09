import {reducer} from "./reducer";
import {combineReducers} from "redux";
import {genresReducer} from "./reducer_average";
import {reducer_genres} from "./reducer_filtre_genres";

export const rootReducer = combineReducers({reducer, genresReducer, reducer_genres})