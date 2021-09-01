import {addUsers, loadUsers} from "../redux/actionsCrastors";

const fetchUsersWithThunk = () => async (dispatch) => {
    let response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    dispatch(loadUsers(response));
}

const addUserWithThunk = (payload) => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: payload.user})
    })
    let savedUser = await response.json();
    dispatch(addUsers(savedUser));
}

export {fetchUsersWithThunk, addUserWithThunk}