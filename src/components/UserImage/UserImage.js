import './UserImg.css';
import {Link} from "react-router-dom";

export default function UserImage() {
    return (

        <div className="UserImage">
            <Link to={''}> <img
                src="https://st3.depositphotos.com/9881890/i/600/depositphotos_133960224-stock-photo-smiling-young-man.jpg"
                alt="User" className={'User_img'}/>
            </Link>
        </div>

    );
}
