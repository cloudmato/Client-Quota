const { createContext, useState } = require("react");

export const AuthContext = createContext({
    loggedUser: {
        userId : '',
        userEmail : '',
        userName : '',
        userProfileImage : ''
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {}
});

export const AuthProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const login = (user) => {
        setLoggedUser(user);
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedUser(null);
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedUser, loggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}