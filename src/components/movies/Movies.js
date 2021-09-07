import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {discoverMovie, genresOfMovies} from "../../services/services";
import {loadGenres, loadMovies} from "../../redux/actions/functionsOfActions";
import './Movies.css';
import {Movie} from "../../Movie/Movie";


export default function Movies() {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(false)
    const [fetchingBack, setFetchingBack] = useState(false)

    const {movies} = useSelector(({reducer}) => reducer);
    const {genres} = useSelector(({genresReducer}) => genresReducer)
    const dispatch = useDispatch()

    document.body.style.backgroundImage = `url("https://st.depositphotos.com/2371801/2999/i/950/depositphotos_29990939-stock-photo-watercolor-leaves-seamless-autumn-background.jpg")`;

    useEffect(() => {
        if (fetching) {
            discoverMovie(currentPage).then(value => {
                dispatch(loadMovies(value.data))
                setCurrentPage(prevState => prevState + 1)
            })
                .finally(() => {
                    setFetching(false)
                });
        } else if (fetchingBack) {
            discoverMovie(currentPage).then(value => {
                dispatch(loadMovies(value.data))
                setCurrentPage(prevState => prevState - 1)
            })
                .finally(() => {
                    setFetchingBack(false)
                });
        } else {
            discoverMovie(currentPage).then(value => {
                dispatch(loadMovies(value.data))
            })
        }
        if (!genres) {
            genresOfMovies().then(value => dispatch(loadGenres(value.data)))
        }
    }, [fetching, fetchingBack, genres, dispatch]);

    /*Pagination*/


    const next_page = () => {
        setFetching(true)
        window.scrollTo(0, 0)
    };

    const previous_page = () => {
        setFetchingBack(true)
        window.scrollTo(0, 0)
    };


    return (

        <div className="Movies">
            {
                movies && movies.map(value => <Movie key={value.id} value={value}/>)
            }
            <button onClick={previous_page} className={'ButtonsList'}>Previous page</button>
            <button onClick={next_page} className={'ButtonsList'}>Next page</button>
        </div>
    );
}