import {useEffect, useState} from "react";
import {getMovieById} from "../../services/services";

export default function MoviesListCard({match:{params:{id}}}) {

    let[movieByID,setMovieById]=useState([]);

    useEffect(()=>{
        getMovieById(id).then(value => setMovieById(value.data))
    },[id])

    return (
        <div className="MoviesListCard">
            {
                JSON.stringify(movieByID)
            }
        </div>
    );
}
