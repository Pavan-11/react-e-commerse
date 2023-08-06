import { createContext,useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
});

export const AuthContextProvider = (props) =>{

    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const logoutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    const ContextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>

}
export default AuthContext;