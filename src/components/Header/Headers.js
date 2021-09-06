import './header.css';
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";

export default function Headers() {
    return (
        <Router>
        <div className="Headers">
            <div className={'Wrapper'}>
                <Link to={'/Home'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" className={'img_header'}/></Link>
            </div>
        </div>
        </Router>
    );
}
