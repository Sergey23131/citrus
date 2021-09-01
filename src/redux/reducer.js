import {ADD_USER, LOAD_USERS} from "./acrions";


let initialSite = {users: []};

export const reducer = (state = initialSite, action) => {
    switch (action.payload) {
        case LOAD_USERS:
            return {...state, user: [...action.payload]}
        case ADD_USER:
            let newUser = action.payload;
            let newUsersArray = [...state.users, newUser]
            return {...state, user: [...newUsersArray]}
        default:
            return state;
    }
}