import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie, genresOfMovies} from "../../services/services";
import {loadGenres, loadMovies} from "../../redux/actions/functionsOfActions";
import { Movie } from "./Movie";

export default function Movies() {
    let {movies} = useSelector(({ reducer }) => reducer);
    let {genres} = useSelector(({ genresReducer }) => genresReducer)
    let dispatch = useDispatch()

    useEffect(() => {
        discoverMovie().then(value => dispatch(loadMovies(value.data)))
        if (!genres) {
            genresOfMovies().then(value => dispatch(loadGenres(value.data)))
        }
    }, []);

    /*Pagination*/

    return (
        <div className="Movies">
            {
                movies && movies.map(value => <Movie key={value.id} value={value}/>)
            }
        </div>
    );
}
