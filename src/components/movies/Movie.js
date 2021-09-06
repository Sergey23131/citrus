import { useSelector } from "react-redux";
import Genres from "../genres/Genres";


export const Movie = ({value}) => {
  let {genres} = useSelector(({ genresReducer }) => genresReducer)

  const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));


    return (
        <div key={value.id}><h3>{value.title}</h3><br/>
          <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=''/> <br/>
          {value.overview} <br/>
          {value.vote_average}/10 <br/>
          <Genres array={genresForOneMovie}/>
        </div>
    );
}
