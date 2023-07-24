import React from 'react';
import classes from './Navbar.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg='black' expand='sm' variant='dark' fixed='top' className={classes.border} >
                <Nav className={classes.nav}>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#store'>Store</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavigationBar;