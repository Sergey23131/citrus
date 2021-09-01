import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUserWithThunk, fetchUsersWithThunk} from "./services/services";


export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersWithThunk())
    }, [])

    const xxx = (e) => {
        let user = {user: 'vasya'}
        dispatch(addUserWithThunk(user));
    }

    return (
        <div className="App">
            <button onClick={xxx}>Button</button>
            {state.users.map(value => <div>{value.name}</div>)}
        </div>
    );
}
