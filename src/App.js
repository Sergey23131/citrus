import {useEffect} from "react";
import {averageOfMovies, discoverMovie} from "./services/services";
import {useDispatch, useSelector} from "react-redux";
import {loadAverages, loadMovies} from "./redux/actions/functionsOfActions";
import {averageReducer} from "./redux/reducers/reducer_average";


export default function App() {

    let films = useSelector(state => {
        let {reducer} = state;
        return reducer;
    });

    let aver = useSelector(state => {
        let {averageReducer} = state;
        return averageReducer;
    })

    let dispatch = useDispatch()
    let {movies} = films;
    let {averages}=aver;
    console.log(aver)


    useEffect(() => {
        discoverMovie().then(value => dispatch(loadMovies(value.data.results)))
    }, [])

    useEffect(()=>{
        averageOfMovies().then(value=> dispatch(loadAverages(value.data)))
    })


    return (
        <div className="App">
            {movies.map(value =>
                <div
                    key={value.id}><h3>{value.title}</h3><br/>
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=''/> <br/>
                    {value.overview} <br/>
                    {value.vote_average}/10
                </div>)}}
        </div>
    );
}
