import { createContext,useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
});

export const AuthContextProvider = (props) =>{

    const [isLoggedInn, setIsLoggedIn ]= useState(false)

    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);

    

    const loginHandler = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
        setIsLoggedIn(true)
    }


    const logoutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsLoggedIn(false);
    }

    const ContextValue = {
        token: token,
        isLoggedIn: isLoggedInn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>

}
export default AuthContext;