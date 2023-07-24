import React from 'react';
import { Card} from 'react-bootstrap';
import classes from './Header.module.css';
const Header = () => {
    return(
        <>
            <Card className={`mt-5`} >
                <div className={`d-flex justify-content-center ${classes.card}`}>The Generics Store</div>
            </Card>
        </>
    )
}

export default Header;