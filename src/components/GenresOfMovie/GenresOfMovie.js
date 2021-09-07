export default function GenresOfMovie({item}) {
    return (
        <div className="GenresOfMovie">
            Genres:
            {
                item && item.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)
            }
        </div>
    );
}
