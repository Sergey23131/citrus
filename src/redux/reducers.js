import {ADD_USER, LOAD_USERS} from "./actions";

let initialState = {users: []};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, users: [...action.payload]}

        case ADD_USER:
            let newUser = action.payload
            let newUsersArray = [...state.users, newUser]
            return {...state, users: [...newUsersArray]}
        default:
            return state;
    }
}
