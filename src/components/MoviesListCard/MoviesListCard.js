import {useEffect, useState} from "react";
import {getMovieById} from "../../services/services";
import './MovieListCard.css';
export default function MoviesListCard({match:{params:{id}}}) {

    let[movieByID,setMovieById]=useState([]);

    useEffect(()=>{
        getMovieById(id).then(value => setMovieById(value.data))
    },[id])

    document.body.style.backgroundImage =`url(https://image.tmdb.org/t/p/w500${movieByID.backdrop_path})`
    console.log(movieByID)

    return (
        <div className="MoviesListCard">
            <div className={'Wrap-box'}>
            <h2>{movieByID.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movieByID.poster_path}`} alt='Poster' className={'Poster'}/> <br/>
        </div>

        </div>
    );
}
