import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import CartContext from './CartContext';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const NavigationBar = (props) => {
    const {totalItems} = useContext(CartContext);

    return (
        <>
            <Navbar bg='black' expand='sm' variant='dark' fixed='top' className={classes.border} >
                <Nav className={classes.nav}>
                    <Nav.Link><Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/home'>Home</Link></Nav.Link>
                    <Nav.Link><Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/'>Store</Link></Nav.Link>
                    <Nav.Link><Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} to='/about'>About</Link></Nav.Link>
                    <Button className='ms-5' onClick={props.onShow}>Your Cart <span>{totalItems()}</span></Button>
                </Nav>
                
            </Navbar>
        </>
    )
}

export default NavigationBar;