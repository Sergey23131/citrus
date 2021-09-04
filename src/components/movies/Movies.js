import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie, genresOfMovies} from "../../services/services";
import {loadGenres, loadMovies} from "../../redux/actions/functionsOfActions";
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
    }, []);

    useEffect(() => {

        genresOfMovies().then(value => dispatch(loadGenres(value.data.genres)))
    }, []);


    let aver = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    })

    let {genres} = aver;

    const mergedGenresMovies = movies.map((movie) => {
        const {genre_ids} = movie;
        const genresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))

        return {...movie, genresList}
    })



    return (
        <div className="Movies">
            {mergedGenresMovies.map(value =>
                <div
                    key={value.id}><h3>{value.title}</h3><br/>
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=''/> <br/>
                    {value.overview} <br/>
                    {value.vote_average}/10 <br/>

          {/*  {<Genres key={value.id} info={value}/>}*/}
                </div>)}

        </div>
    );
}