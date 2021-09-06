import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {discoverMovie, genresOfMovies} from "../../services/services";
import { loadGenres, loadMovies} from "../../redux/actions/functionsOfActions";
import './Movies.css';
import {Movie} from "../../Movie/Movie";


export default function Movies() {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)

    let {movies} = useSelector(({reducer}) => reducer);
    let {genres} = useSelector(({genresReducer}) => genresReducer)
    let dispatch = useDispatch()


    useEffect(() => {
        if (fetching) {
            discoverMovie(currentPage).then(value => {
                dispatch(loadMovies(value.data))
                setCurrentPage(prevState => prevState + 1)
            })
                .finally(() => setFetching(false));
        }
        if (!genres) {
            genresOfMovies().then(value => dispatch(loadGenres(value.data)))
        }
    }, [dispatch, fetching, genres]);


    /*Pagination*/

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 20) {
            setFetching(true)
            window.scrollTo(0, 0)
        }
    }

    return (

        <div className="Movies">

            {
                movies && movies.map(value => <Movie key={value.id} value={value}/>)
            }

        </div>


    );
}