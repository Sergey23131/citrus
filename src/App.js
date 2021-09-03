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

    let aver = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    })

    let dispatch = useDispatch()
    let {movies} = films;
    let {genres} = aver;

console.log(movies)

    useEffect(() => {
        discoverMovie().then(value => dispatch(loadMovies(value.data.results)))
    }, [])

    useEffect(() => {
        genresOfMovies().then(value => dispatch(loadGenres(value.data.genres)))
    }, [])


    return (
        <div className="App">
            {movies.map(value =>
                <div
                    key={value.id}><h3>{value.title}</h3><br/>
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=''/> <br/>
                    {value.overview} <br/>
                    {value.vote_average}/10
                    { genres.map(item=> <Genres key={item.id} item={item} info={value}/>)}
                </div>)}}

        </div>
    );
}
