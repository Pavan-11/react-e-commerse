import React, { useContext } from 'react';
import classes from './ItemsSection.module.css';
import { Card, Container, Button } from 'react-bootstrap';
import CartContext from './CartContext';




const Items = () => {

    const {addToCart} = useContext(CartContext);
    const productsArr = [

        {
            id: Date.now(),

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            id: Date.now(),

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
            id: Date.now(),

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: Date.now(),

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ];

    const handleToCart = (item) => {
        addToCart(item);
    }




    return (
        <>
            <Container style={{ width: '60%' }} className={classes.container}>

                <Card className='mb-5 border-0' style={{ width: '20rem' }}>
                    {productsArr.map((item) => (
                        <>
                            <Card.Title><h4 className='text-center'>{item.title}</h4></Card.Title>
                            <div className={classes.imgDiv}>
                                <Card.Img className={classes.img} variant="top" src={item.imageUrl} />
                            </div>
                            <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${item.price}
                                <Button onClick={() => handleToCart(item)} >Add to Cart</Button>
                            </Card.Footer>
                        </>
                    ))}
                </Card>
               
            </Container>


        </>


    )
}
export default Items;