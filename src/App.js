
import Movies from "./components/movies/Movies";
import './App.css';
import Headers from "./components/Header/Headers";

import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";


export default function App() {
    return (
        <Router>
        <div className="App">
            <Headers/>
        </div>

        <Route path={'/Home'} render={(props) => {
            return <Movies {...props}/>
        }}/>
        </Router>
    );
}
