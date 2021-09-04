import Movies from "../movies/Movies";

export default function PosterPreview({item}) {
    return (
        <div className="PosterPreview">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=''/> <br/>
        </div>
    );
}
