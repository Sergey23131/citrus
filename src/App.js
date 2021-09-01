import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUsers, loadUsers} from "./redux/functionsOfActions";
import {getUsers, newUser} from "./services/services";


export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const {users} = state;
    console.log(state)

    useEffect(() => {
        getUsers().then(value => dispatch(loadUsers(value)));
    }, [])

    let letAddUser = async (e) => {
        const user = {name: 'vasya'};
        newUser(dispatch, user);

    }

    return (

        <div className="App">
            <button onClick={letAddUser}>Button</button>

            {users.map(value => <div>{value.name}</div>)}
        </div>
    );
}

