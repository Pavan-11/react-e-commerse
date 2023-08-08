import { createContext,useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    email : '',
    login: (token) => { },
    logout: () => { },

});

export const AuthContextProvider = (props) =>{

    // const [isLoggedInn, setIsLoggedIn ]= useState(false)

    const initialToken = localStorage.getItem('token')
    const initialEmail = localStorage.getItem('email')
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(initialEmail);

    const userLoggedIn = !!token;

    const loginHandler = async(token, recivedEmail) => {
        console.log(recivedEmail);//to display the entered email in the console
        
        localStorage.setItem("token", token);
        
        setToken(token);

        setEmail(recivedEmail);
        
        localStorage.setItem('email',recivedEmail);
    }


    const logoutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
        // setIsLoggedIn(false);
    }

    const ContextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        email : email,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>

}
export default AuthContext;