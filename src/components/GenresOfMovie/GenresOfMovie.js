export default function GenresOfMovie({item}) {
    console.log(item)
    return (
        <div className="GenresOfMovie">
            Genres:
            {
                item.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)
            }
        </div>
    );
}
