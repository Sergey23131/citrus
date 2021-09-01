import {useEffect, useState} from "react";
import {discoverMovie} from "./services/services";
import {useDispatch, useSelector} from "react-redux";
import {loadMovies} from "./redux/functionsOfActions";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch()
    let {movies}=state
    console.log(state)

    useEffect(() => {
        discoverMovie().then(value => dispatch(loadMovies(value)))
    }, [])
    return (
        <div className="App">
            {movies.map(value => <div>{value.title}</div>)}}
        </div>
    );
}


