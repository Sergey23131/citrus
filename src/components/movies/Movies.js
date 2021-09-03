import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie} from "../../services/services";
import {loadMovies} from "../../redux/actions/functionsOfActions";
import Genres from "../genres/Genres";

export default function Movies() {


    let films = useSelector(state => {
        let {reducer} = state;
        return reducer;
    });


    let dispatch = useDispatch()
    let {movies} = films;

    useEffect(() => {
        discoverMovie().then(value => dispatch(loadMovies(value.data.results)))
    }, [])

    console.log(movies)

    return (
        <div className="Movies">
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