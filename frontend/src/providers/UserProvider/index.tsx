import { UserContext } from 'context/user';
import React, { useState } from 'react';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({firstName: null, lastName: null});
    const userProvidedValue = { user, setUser };

    return (
        <UserContext.Provider value={userProvidedValue}>{children}</UserContext.Provider>
    )
}

export { UserProvider };