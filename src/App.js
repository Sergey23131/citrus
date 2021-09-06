import Movies from "./components/movies/Movies";
import './App.css';
import Headers from "./components/Header/Headers";

import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import MoviesListCard from "./components/MoviesListCard/MoviesListCard";
import Footer from "./components/Footer/Footer";


export default function App() {
    return (
        <Router>
            <div className="App">
                <Headers/>

            </div>

            <Switch>
                <Route exact path={'/movies/:id'} component={MoviesListCard}/>
                <Route exact path={'/movies'} component={Movies}/>
                <Redirect exact to="/movies"/>
            </Switch>
        </Router>

    );
}
