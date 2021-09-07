import './Info.css';

export default function MovieInfo({item}) {
    return (
        <div className="MovieInfo">
            {item.overview}
        </div>
    );
}
