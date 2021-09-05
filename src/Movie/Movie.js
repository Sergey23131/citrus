import {useSelector} from "react-redux";
import GenreBadge from "../components/GenreBadge/GenreBadge";
import PosterPreview from "../components/PosterPreview/PosterPreview";
import StarsRating from "../components/StarsRating/StarsRating";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import UserInfo from "../components/UserInfo/UserInfo";
import './Movie.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import MoviesListCard from "../components/MoviesListCard/MoviesListCard";




export const Movie = ({value}) => {
    let {genres} = useSelector(({genresReducer}) => genresReducer)

    const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));

    return (

        <div className={'Movie'}>
            <div className={'box'}>
                <div className={'p_item'}>
                <Link to={'/movie'}><h3>{value.title}</h3></Link>
                <PosterPreview item={value}/>
                <MovieInfo item={value}/>
                <div className={'second-box'}>
                    <GenreBadge array={genresForOneMovie}/>
                    <div className={'third-box'}>
                        <StarsRating item={value}/>
                        <UserInfo item={value}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}