import {useSelector} from "react-redux";
import GenreBadge from "../GenreBadge/GenreBadge";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";
import MovieInfo from "../MovieInfo/MovieInfo";
import './Movie.css';
import {Link} from "react-router-dom";
import UserImage from "../UserImage/UserImage";


export const Movie = ({value}) => {

    const {genres} = useSelector(({genresReducer}) => genresReducer)

    const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));


    return (
        <div className={'Movie'}>
            <div className={'Movie-box'}>
                <div className={'box'}>
                    <div className={'p_item'}>
                        <Link to={{pathname: '/movies/' + value.id}}><h3>{value.title}</h3></Link>
                        <PosterPreview item={value}/>
                        <MovieInfo item={value}/>
                        <div className={'second-box'}>
                            <GenreBadge array={genresForOneMovie}/>
                            <div className={'third-box'}>
                                <div><StarsRating item={value}/></div>
                                <div><UserImage item={value}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}