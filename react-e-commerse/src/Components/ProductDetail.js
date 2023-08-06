import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import classes from './ProductsDetail.module.css';
import { Container, Button } from 'react-bootstrap';


export const ProductDetail = () => {

    const params = useParams();
    const location = useLocation();
    const item = location.state;
    console.log(location);

    return (
        <>
            <Container className='m-5' style={{ height: '100vh', display: 'flex' }}>
                <div>

                    <img src={item.imageUrl} alt="any" className={classes.img} />
                    <Button style={{marginRight:'3rem', marginTop: '1rem'}}>Add TO Cart</Button>
                    <Button variant='success' style={{ marginLeft: '3rem', marginTop: '1rem' }}>Buy Now</Button>
                    
                </div>
                <div>
                    <h3 className={classes.title}>Title: {item.title}</h3>
                    <h4 className={classes.price}>Price: ${item.price}</h4>
                    <h4 className={classes.quantity}>Qunatity: <input type="number" max="5" min="1" placeholder='0' style={{ width: '2.5rem', color: "darkcyan" }} /></h4>
                    <h5 className={classes.warranty}><strong>Warranty:</strong> 2 years (1 year standard Warranty + 1 year additional Warranty)</h5>
                    <h5 style={{ color: 'gray', fontSize: '1rem' }}>Rating: *****</h5>
                    <p><strong>Description:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias tenetur at porro sint atque excepturi, laboriosam recusandae itaque quo, voluptate nihil maxime, consequuntur voluptates ratione placeat facere? Quidem illo culpa, quaerat, iste esse minima delectus optio natus veniam dolorum, sunt corrupti eum quia excepturi tenetur porro. Maiores veniam iure accusantium laudantium perferendis doloribus magnam, quibusdam saepe ut quidem pariatur ratione a quis aperiam? Ab, omnis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto porro, id, et nemo eius minus quis sapiente sit provident velit animi natus maxime ipsam aliquam? In, nostrum asperiores laudantium minima voluptatum veniam sapiente nisi!</p>
                </div>
            </Container>

        </>
    )
}
export default ProductDetail;

