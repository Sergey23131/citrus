import {useEffect} from "react";
import {addGenres, genresOfMovies} from "../../services/services";
import {loadGenres} from "../../redux/actions/functionsOfActions";
import {useDispatch, useSelector} from "react-redux";

export default function Genres({info}) {
    let genresList;
    let {genre_ids} = info;
    let dispatch = useDispatch()

    let aver = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    })

    let {genres} = aver;

    useEffect(() => {
        genresOfMovies().then(value => dispatch(loadGenres(value.data.genres)))
    }, [])

    let a = () => {
        genresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
    }
    a()


    return (
        <div className="Genres">

        </div>
    );
}