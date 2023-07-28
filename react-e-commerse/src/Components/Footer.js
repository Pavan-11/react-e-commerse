import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './Footer.module.css';

const Footer = () => {
    return(
        <>
        <Card>
            <Card.Footer className={classes.footer} style={{backgroundColor: 'rgb(50 , 43 , 43)'}}>
                <h4 className={classes.h1}>The Generics</h4>
            </Card.Footer>

        </Card>
        </>
    )
}
export default Footer;