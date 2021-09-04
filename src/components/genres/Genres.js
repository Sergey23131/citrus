export default function Genres({array}) {

    return (
        <div className="Genres">
            {
                array.map((genre, i) => <i key={genre?.id || i}>- {genre?.name} -</i>)
            }
        </div>
    );
}
