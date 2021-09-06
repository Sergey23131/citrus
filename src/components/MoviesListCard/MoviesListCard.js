import {useEffect, useState} from "react";
import {getMovieById} from "../../services/services";
import './MovieListCard.css';
import GenreBadge from "../GenreBadge/GenreBadge";
import GenresOfMovie from "../GenresOfMovie/GenresOfMovie";


export default function MoviesListCard({match: {params: {id}}}) {

    let [movieByID, setMovieById] = useState([]);


    useEffect(() => {
        getMovieById(id).then(value => setMovieById(value.data))
    }, [id])

    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieByID.backdrop_path})`
    const {genres}=movieByID;
    console.log(genres)

    return (
        <div className="MoviesListCard">
            <div className={'Wrap-box'}>
                <div className={'Poster-box'}>
                    <h2>{movieByID.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movieByID.poster_path}`} alt='Poster'
                         className={'Poster'}/>
                </div>
                <GenresOfMovie item={genres}/>
                <p>Vote Average: {movieByID.vote_average}/10</p>
                <p>Original Language: {movieByID.original_language}</p>
                <p>Release Date: {movieByID.release_date}</p>
                <p>Overview: {movieByID.overview}</p>
            </div>
        </div>
    );
}
