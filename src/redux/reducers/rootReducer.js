
import {reducer} from "./reducer";
import {combineReducers} from "redux";
import {averageReducer} from "./reducer_average";


export const rootReducer=combineReducers({reducer,averageReducer})