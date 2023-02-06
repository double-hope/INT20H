import { AuthContext } from 'context/auth';
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(!!sessionStorage.getItem('token'));
    const authProvidedValue = { auth, setAuth };

    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider };