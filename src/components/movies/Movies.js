import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {discoverMovie, genresOfMovies} from "../../services/services";
import {loadGenres, loadMovies} from "../../redux/actions/functionsOfActions";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";
import MovieInfo from "../MovieInfo/MovieInfo";
import GenreBadge from "../GenreBadge/GenreBadge";
import UserInfo from "../UserInfo/UserInfo";
import {Movie} from "../../Movie/Movie";

export default function Movies() {
    const [currentPage,setCurrentPage]=useState(1);
    const [fetching,setFetching]=useState(true)

    let {movies} = useSelector(({ reducer }) => reducer);
    let {genres} = useSelector(({ genresReducer }) => genresReducer)
    let dispatch = useDispatch()

    useEffect(() => {
        if (fetching) {
            discoverMovie(currentPage).then(value => {
                dispatch(loadMovies(value.data))
                setCurrentPage(prevState => prevState + 1)
            })
                .finally(()=> setFetching(false));
        }
        if (!genres) {
            genresOfMovies().then(value => dispatch(loadGenres(value.data)))
        }
    }, [fetching]);

    /*Pagination*/

    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)

        return function (){
        document.removeEventListener('scroll',scrollHandler)
        };
        },[])

const scrollHandler = (e)=>{
    if (e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100 ){
        setFetching(true)
        window.scrollTo(0, 0)
    }
    }


    return (
        <div className="Movies">

            {
                movies && movies.map(value => <Movie key={value.id} value={value}/>)
            }
            {/*{movies.map(value =>
                <div
                    key={value.id}><h3>{value.title}</h3><br/>
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=''/> <br/>
                    {value.overview} <br/>
                    {value.vote_average}/10 <br/>

                    <PosterPreview key={value.id} item={value}/>
                    <StarsRating key={value.id} item={value}/>
                    <MovieInfo key={value.id} item={value}/>
                    <GenreBadge key={value.id} item={value}/>
                    <UserInfo key={value.id} item={value}/>

                </div>)}
*/}
        </div>
    );
}