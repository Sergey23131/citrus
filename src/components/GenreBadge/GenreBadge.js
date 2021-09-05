export default function GenreBadge({array}) {
    return (
        <div className="GenreBadge">
          Genres:
            {
                array.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)
            }
        </div>
    );
}
