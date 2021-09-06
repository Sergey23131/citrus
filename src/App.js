import Movies from "./components/movies/Movies";
import './App.css';
import Headers from "./components/Header/Headers";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import MoviesListCard from "./components/MoviesListCard/MoviesListCard";

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
