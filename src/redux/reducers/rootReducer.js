
import {reducer} from "./reducer";
import {combineReducers} from "redux";
import {genresReducer} from "./reducer_average";



export const rootReducer=combineReducers({reducer,genresReducer})