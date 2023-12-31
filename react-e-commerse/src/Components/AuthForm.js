import { useState, useRef, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import classes from './AuthForm.module.css';
import AuthContext from '../Context/AuthContext';

const AuthForm = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();


    const authCtx = useContext(AuthContext);
    

     const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;



        setIsLoading(true);

        let url;
        if(isLogin){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd7M95EmfhA7PBsc8RiRtUsrLx9Simq70';
            
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd7M95EmfhA7PBsc8RiRtUsrLx9Simq70'
        }
        fetch(url,
        {
            method : "POST",
            body : JSON.stringify({
                email : enteredEmail,
                password : enteredPassword,
                returnSecureToken : true,
            }),
            headers : {
                'Content-Type':"application/json"
            }
        }).then(res => {
            setIsLoading(false);
            if(res.ok){
                
                return res.json();
            }else{
                return res.json().then(data => {
                    localStorage.setItem('email', data.email);
                    let errorMessage = 'Authentication Failed';

                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            authCtx.login(data.idToken, data.email);
            console.log(data)

            // console.log(data)
            
            // return <Navigate to="/store" />            
            navigate("/store", { replace: true })
        }).catch(err => {
            alert(err.message);
        })
        
        
    }
    // console.log(authCtx.isLoggedIn);



    return (
        <>
            <section className={classes.auth}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler} >
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input
                            type='password'
                            id='password'
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                        {isLoading && <p>Sending Request...</p>}
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default AuthForm;