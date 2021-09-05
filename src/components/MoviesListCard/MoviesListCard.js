import {useEffect, useState} from "react";
import {getMovieById} from "../../services/services";

export default function MoviesListCard() {
    let[movieByID,setMovieById]=useState([]);

    useEffect(()=>{
        getMovieById().then(value => setMovieById(value.data))
    },[])

    console.log('apsdpas')
    return (
        <div className="PMoviesListCard">
asdasd
        </div>
    );
}
