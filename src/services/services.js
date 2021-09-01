import {addUsers} from "../redux/functionsOfActions";

const getUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return response;
}

const newUser = async (dispatch, {name}) => {
    let response=await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name})

    }).then(value => value.json());
    dispatch(addUsers(response));
}

export {getUsers,newUser}