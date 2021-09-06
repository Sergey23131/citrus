import './header.css';
import { Link } from "react-router-dom";

export default function Headers() {
    return (
        <div className="Headers">
            <div className={'Wrapper'}>
                <Link to={'/movies'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" className={'img_header'}/></Link>
            </div>
        </div>
    );
}
