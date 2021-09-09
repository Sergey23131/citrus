import Movies from "./components/movies/Movies";
import './App.css';
import Headers from "./components/Header/Headers";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import MoviesListCard from "./components/MoviesListCard/MoviesListCard";
import UserPage from "./components/UserPage/UserPage";
import FilteredGenres from "./components/FilteredGenre/FilteredGenres";


export default function App() {
    return (
        <Router>
            <div className="App">
                <Headers/>
                <Switch>
                    <Route path={'/User/'} component={UserPage}/>
                    <Route path={'/genre/'} component={FilteredGenres}/>
                    <Route exact path={'/movies/:id'} component={MoviesListCard}/>
                    <Route exact path={'/movies'} component={Movies}/>
                    <Redirect exact to="/movies"/>
                </Switch>
            </div>
        </Router>

    );
}
