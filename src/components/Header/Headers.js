import './header.css';
import {Link} from "react-router-dom";
import UserImage from "../UserImage/UserImage";
import UserInfo from "../UserInfo/UserInfo";


export default function Headers() {

    const changeColor = () => {

    }

    return (
        <div className="Headers">
            <div className={'Wrapper'}>
                <Link to={'/movies'}><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="Logo" className={'img_header'}/></Link>
                <Link to={'/movies'} className={'movie_b'}>Movies</Link>
                <button className={'ChangeTheme'} onClick={'changeColor'}>Black theme</button>
                <form action={"search"} className={'form_pos'}>
                    <input type="text" name="key" placeholder="Find movie" className={'form_input'}/>
                </form>
                <UserImage/>
                <UserInfo/>
            </div>
        </div>

    );
}
