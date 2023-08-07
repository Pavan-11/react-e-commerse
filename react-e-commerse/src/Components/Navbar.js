import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import CartContext from './CartContext';
import AuthContext from '../Context/AuthContext';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';


const NavigationBar = (props) => {

    // const [isLogged, setIsLogged]= useState(false)?\

    

    // const history = useNavigate();

    const authCtx = useContext(AuthContext);

   
    const logoutHandler = () => {
        authCtx.logout()
        // history.replace('/auth')
        return <Navigate to='/auth' />


    }
    const isLoggedIn = authCtx.isLoggedIn;

    const { totalItems } = useContext(CartContext);

    return (
        <>
            <Navbar bg='black' expand='sm' variant='dark' fixed='top' className={classes.border} >
                <Nav className={classes.nav}>
                    <Nav.Link as={Link} state={`something`} id="RouterNavLink" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} id="RouterNavLink" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/store'>Store</Nav.Link>
                    <Nav.Link as={Link} id="RouterNavLink" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/about'>About</Nav.Link>
                    {!isLoggedIn && <Nav.Link as={Link} id="RouterNavLink" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/auth'>Login</Nav.Link>}
                    {isLoggedIn && <Button className='ms-5' onClick={logoutHandler}>Logout</Button>}
                    <Nav.Link as={Link} id="RouterNavLink" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/contact'>Contact Us</Nav.Link>
                    <Button className='ms-5' onClick={props.onShow}>Your Cart <span>{totalItems()}</span></Button>
                </Nav>

            </Navbar>
        </>
    )
}

export default NavigationBar;