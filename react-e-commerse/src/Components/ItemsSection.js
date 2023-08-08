import React, { useContext } from 'react';
import classes from './ItemsSection.module.css';
import { Card, Container, Button } from 'react-bootstrap';
import CartContext from './CartContext';
import {NavLink} from 'react-router-dom';




const Items = () => {

    const {addToCart} = useContext(CartContext);
    const productsArr = [

        {
            id: 'c1',

            quantity : '',

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            id: 'c2',

            quantity : '',

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
            id: 'c3',

            quantity : '',

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: 'c4',

            quantity: '',

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
            <Container style={{margin: '0px 90px', padding:'0px 170px'}}  >

                <Card className='mb-5 border-0 ' style={{display:'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'center'}} >
                    {productsArr.map((item) => (
                        <div className={classes.card} key={item.id}>
                            <Card.Title><h4 className='text-center'>{item.title}</h4></Card.Title>
                            <div className={classes.imgDiv}>
                                <NavLink to={`/products/${item}`} state={item}><Card.Img className={classes.img} variant="top" src={item.imageUrl} /></NavLink>
                            </div>
                            <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${item.price}
                                <Button onClick={() => {handleToCart(item)}} >Add to Cart</Button>
                            </Card.Footer>
                        </div>
                    ))}
                </Card>
               
            </Container>


        </>


    )
}
export default Items;