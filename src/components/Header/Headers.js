import './header.css';
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import UserImage from "../UserImage/UserImage";
import UserInfo from "../UserInfo/UserInfo";
import './header.css';

export default function Headers() {
    return (
        <div className="Headers">
            <div className={'Wrapper'}>
                <Link to={'/movies'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" className={'img_header'}/></Link>
                <Link to={'/movies'} className={'movie_b'} >Movies</Link>
                <form action={"search"} className={'form_pos'}>
                    <input type="text" name="key" placeholder="Find movie" className={'form_input'}/>
                </form>
                <UserImage/>
                <UserInfo/>
            </div>
        </div>

    );
}
