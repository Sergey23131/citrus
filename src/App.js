import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUsers, loadUsers} from "./redux/functionsOfActions";

const getUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return response;
}

const newUser = async (dispatch, {name}) => {
   let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name})

    }).then(value => value.json());
    dispatch(addUsers(response));
}


export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const {users} = state;

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

