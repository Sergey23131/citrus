import {LOAD_AVERAGE, LOAD_MOVIES} from "./actions";


const loadMovies = (payload) => {
    return {type: LOAD_MOVIES, payload}
}

const loadAverages =(payload)=>{
    return{type:LOAD_AVERAGE,payload}
}

export {loadMovies,loadAverages}