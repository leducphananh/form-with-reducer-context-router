import UserContext from './Context';
import { useReducer } from 'react';
import reducer, { initState } from './reducer'

function UserProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
