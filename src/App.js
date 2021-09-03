import {useEffect, useState} from "react";
import {discoverMovie, genresOfMovies} from "./services/services";
import {useDispatch, useSelector} from "react-redux";
import {loadGenres, loadMovies} from "./redux/actions/functionsOfActions";
import Genres from "./components/genres/Genres";


export default function App() {


    let films = useSelector(state => {
        let {reducer} = state;
        return reducer;
    });


    let dispatch = useDispatch()
    let {movies} = films;

    useEffect(() => {
        discoverMovie().then(value => dispatch(loadMovies(value.data.results)))
    }, [])

    return (
        <div className="App">
            {movies.map(value =>
                <div
                    key={value.id}><h3>{value.title}</h3><br/>
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=''/> <br/>
                    {value.overview} <br/>
                    {value.vote_average}/10
                        {<Genres key={value.id} info={value}/>}
                </div>)}}

        </div>
    );
}
