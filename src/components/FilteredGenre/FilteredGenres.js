import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import './filtredGenres.css';
import {Link} from "react-router-dom";
import {getMoviesByGenre} from "../../services/services";
import {loadFilteredFilms} from "../../redux/actions/functionsOfActions";

export default function FilteredGenres() {
    const {filtered} = useSelector(({reducer_genres}) => reducer_genres)
    const {genres} = useSelector(({genresReducer}) => genresReducer)
    const dispatch = useDispatch()

    /*GenreFilter*/

    const genreFilter = (e) => {
        getMoviesByGenre(e.target.value).then(value => dispatch(loadFilteredFilms(value.data)))
    }

    return (
        <div className="FilteredGenres">
            <div className='GenreSearch'>
                <select onChange={genreFilter} className={'selectGenre'}>
                    {
                        genres && genres.map(value => <option value={value.id}>{value.name}</option>)
                    }
                </select>
                <Link to={'/genre/'} className={'ButtonForGenres'}>Find movies by genre</Link>
            </div>
            <div className="FilteredMovie">
                {
                    filtered && filtered.map(value => <Movie key={value.id} value={value}/>)
                }
            </div>
        </div>
    );
}