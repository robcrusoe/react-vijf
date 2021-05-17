import React from 'react';

/* `AuthContext` will be an object that contains a component */
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;