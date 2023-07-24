import React from 'react';
import classes from './ItemsSection.module.css';
import { Card, Container, Button } from 'react-bootstrap';

const Items = (props) => {

    const productsArr = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]


    return (
        <Container style={{ width: '60%' }} className={classes.container}>

            <Card className='mb-5 border-0' style={{ width: '20rem' }}>
                <Card.Title><h4 className='text-center'>{productsArr[0].title}</h4></Card.Title>
                <div className={classes.imgDiv}>
                    <Card.Img className={classes.img} variant="top" src={productsArr[0].imageUrl} />
                </div>
                <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${productsArr[0].price}
                    <Button >Add to Cart</Button>
                </Card.Footer>
            </Card>
            <Card className='mb-5 border-0' style={{ width: '20rem' }}>
                <Card.Title><h4 className='text-center'>{productsArr[1].title}</h4></Card.Title>
                <div className={classes.imgDiv}>
                    <Card.Img className={classes.img} variant="top" src={productsArr[1].imageUrl} />
                </div>
                <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${productsArr[1].price}
                    <Button >Add to Cart</Button>
                </Card.Footer>
            </Card>

            <Card className='mb-5 border-0' style={{ width: '20rem' }}>
                <Card.Title><h4 className='text-center'>{productsArr[2].title}</h4></Card.Title>
                <div className={classes.imgDiv}>
                    <Card.Img className={classes.img} variant="top" src={productsArr[2].imageUrl} />
                </div>
                <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${productsArr[2].price}
                    <Button >Add to Cart</Button>
                </Card.Footer>
            </Card>

            <Card className='mb-5 border-0' style={{ width: '20rem' }}>
                <Card.Title><h4 className='text-center'>{productsArr[3].title}</h4></Card.Title>
                <div className={classes.imgDiv}>
                    <Card.Img className={classes.img} variant="top" src={productsArr[3].imageUrl} />
                </div>
                <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${productsArr[3].price}
                    <Button >Add to Cart</Button>
                </Card.Footer>
            </Card>

        </Container>
    )
}
export default Items;