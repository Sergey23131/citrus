import {useEffect, useState} from "react";
import {getMovieById} from "../../services/services";
import './MovieListCard.css';
import GenreBadge from "../GenreBadge/GenreBadge";


export default function MoviesListCard({match: {params: {id}}}) {

    const [movieByID, setMovieById] = useState([]);


    useEffect(() => {
        getMovieById(id).then(value => setMovieById(value.data))
    }, [id])


    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieByID.backdrop_path})`


    return (
        <div className="MoviesListCard">
            <div className={'Wrap_box_list'}>
                <div className={'Poster-box'}>
                    <h1>{movieByID.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500${movieByID.poster_path}`} alt='Poster'
                         className={'Poster_m'}/>
                </div>
                <div className={'info_box'}>
                    <h3><GenreBadge array={movieByID.genres}/></h3>
                    <p><span className={'style-info'}>Vote Average:</span> <span
                        className={'Vote'}> {movieByID.vote_average}</span>/10.</p>
                    <p><span className={'style-info'}>Original Language:</span> {movieByID.original_language}.</p>
                    <p><span className={'style-info'}>Release Date:</span> {movieByID.release_date};</p>
                    <p><span className={'style-info'}>Overview:</span> {movieByID.overview}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam aliquid,
                        architecto at autem blanditiis corporis cum doloremque earum eos expedita ipsa itaque molestiae,
                        nihil nostrum porro quaerat, quam repellat sed veniam voluptate voluptatum! Alias blanditiis
                        deserunt eum excepturi libero nulla odio officia, quaerat repudiandae sunt? Cupiditate et
                        nostrum numquam porro soluta? A alias amet assumenda cumque, dignissimos dolor dolorum eaque
                        explicabo fugiat id iusto libero magnam molestiae necessitatibus, nobis odio omnis placeat quia
                        quo repellat repellendus totam voluptate! Adipisci alias aliquid architecto, dolore eligendi ex
                        exercitationem facilis hic natus non quasi quidem quo rem, reprehenderit repudiandae, unde
                        voluptatibus.</p>
                </div>
            </div>
        </div>
    );
}
