import {useSelector} from "react-redux";
import GenreBadge from "../components/GenreBadge/GenreBadge";
import PosterPreview from "../components/PosterPreview/PosterPreview";
import StarsRating from "../components/StarsRating/StarsRating";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import UserInfo from "../components/UserInfo/UserInfo";

export const Movie = ({value}) => {
    let {genres} = useSelector(({genresReducer}) => genresReducer)

    const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));

    return (
        <div className={'box'}>
            <h3>{value.title}</h3>
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
    );
}