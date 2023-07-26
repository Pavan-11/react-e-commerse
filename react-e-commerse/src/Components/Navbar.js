import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import CartContext from './CartContext';

import {Nav, Navbar, Button} from 'react-bootstrap';

const NavigationBar = (props) => {
    const {totalItems} = useContext(CartContext);

    return (
        <>
            <Navbar bg='black' expand='sm' variant='dark' fixed='top' className={classes.border} >
                <Nav className={classes.nav}>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#store'>Store</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Button className='ms-5' onClick={props.onShow}>Your Cart <span>{totalItems()}</span></Button>
                </Nav>
                
            </Navbar>
        </>
    )
}

export default NavigationBar;