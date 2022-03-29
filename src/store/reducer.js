import { SET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from './constants';

const initState = {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    user: {
        id: null,
        name: '',
        gender: 'Male',
        dob: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        courses: [],
    }
}

const hadId = (listUser, id) => {
    return listUser.some(user => user.id === id);
}

const getUserById = (listUser, id) => {
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].id === id) return listUser[i];
    }
    return null;
}

function reducer(state, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_USER:
            const newAddUsers = [...state.users];
            let id = Math.floor(Math.random() * 100);
            while (hadId(newAddUsers, id)) {
                id = Math.floor(Math.random() * 100);
            }
            action.payload.id = id;
            newAddUsers.push(action.payload);
            localStorage.setItem('users', JSON.stringify(newAddUsers));
            return {
                ...state,
                users: [...newAddUsers]
            }
        case DELETE_USER:
            const newDeleteUsers = [...state.users];
            const indexDeleteUser = newDeleteUsers.indexOf(action.payload);
            if (indexDeleteUser === -1) {
                return {
                    ...state
                }
            }
            newDeleteUsers.splice(indexDeleteUser, 1);
            localStorage.setItem('users', JSON.stringify(newDeleteUsers));
            return {
                ...state,
                users: [...newDeleteUsers]
            }
        case UPDATE_USER:
            const newUpdateUsers = [...state.users];
            const updateUser = getUserById(newUpdateUsers, action.payload.id);
            const indexUpdateUser = newUpdateUsers.indexOf(updateUser);
            if (indexUpdateUser === -1) {
                return {
                    ...state
                }
            }
            newUpdateUsers[indexUpdateUser] = action.payload;
            localStorage.setItem('users', JSON.stringify(newUpdateUsers));
            return {
                ...state,
                users: [...newUpdateUsers]
            }
        default:
            throw new Error('Invalid action');
    }
}

export { initState }
export default reducer;
