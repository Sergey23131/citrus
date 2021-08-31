import {useEffect} from "react";
import {addUsers, loadUsers} from "./redux/actionsCrastors";
import {useDispatch, useSelector} from "react-redux";

const fetchUsersWithThunk = () => async (dispatch) => {
    let response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    dispatch(loadUsers(response));
}

const addUserWithThunk =(payload)=> async (dispatch)=>{
    let response = fetch('https://jsonplaceholder.typicode.com/users',{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({name:payload})
    })
let savedUser=await response.json();
    dispatch(addUsers(savedUser));
}


export default function App() {

    let state= useSelector(state=> state);
    let dispatch = useDispatch();

    useEffect(() => {
dispatch(fetchUsersWithThunk())
    }, [])

    const xxx=(e)=>{
        let user= {user:'vasya'}
        dispatch(addUserWithThunk(user));
    }

    return (
        <div className="App">
        <button onClick={xxx}>Button</button>
            {state.users.map(value=><div>{value.name}</div>)}
        </div>
    );
}
