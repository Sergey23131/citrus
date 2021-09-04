
import {useDispatch, useSelector} from "react-redux";

export default function Genres({info}) {
    let genresList;
    let {genre_ids} = info;

    let aver = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    })

    let {genres} = aver;


    let a = () => {
        genresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
    }
    a()


    return (
        <div className="Genres">
            {
                genresList.map(({ name, id }) => (<div key={id}>{name}</div>))
            }
        </div>
    );
}