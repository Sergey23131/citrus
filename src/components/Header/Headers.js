import './header.css';
import {Link} from "react-router-dom";
import UserImage from "../UserImage/UserImage";
import UserInfo from "../UserInfo/UserInfo";
import {useState} from "react";
import {useSelector} from "react-redux";


export default function Headers({history}) {

    const [findMovie, setFindMovie] = useState({});
    let [formState, setFormState] = useState({title: ''})

    const {movies} = useSelector(({reducer}) => reducer);

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
        console.log(history)
        movies.map(value => {
            if (String(value.title) === String(formState.title)) {
                setFindMovie(value.id)
            }
        })
    }


    const save = (e) => {
        e.preventDefault();
        history.push('/movies/' + findMovie.id)
        setFormState({title: ''});
    }

    const changeColor = (e) => {
        document.body.classList.toggle('dark');
    }

    return (
        <div className="Headers">
            <div className={'Wrapper'}>
                <Link to={'/movies'}><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="Logo" className={'img_header'}/></Link>
                <Link to={'/movies'} className={'movie_b'}>Movies</Link>
                <button className={'ChangeTheme'} onClick={changeColor}>Change theme</button>
                <form onSubmit={save} className={'form_pos'}>
                    <input type="text" name={'title'} value={formState.title} onChange={onFormInputChange}
                           placeholder="Find movie" className={'form_input'}/>
                </form>
                <UserImage/>
                <UserInfo/>
            </div>
        </div>

    );
}
