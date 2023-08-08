import React, {useContext, useEffect, useState} from 'react';
import CartContext from './CartContext';
import Modal from './Modal';
import {  Table } from 'react-bootstrap';
import './Cart.css';
import axios from 'axios';

const Cart = (props) => {

    const [cartItems, setCartItems] = useState([]);

    const userEmail = localStorage.getItem('email').replace('@', '').replace('.', "");

    const {remove,removeFromCart, calculatedTotalAmount} = useContext(CartContext);

    useEffect(()=>{
       const fetchCartProducts = async() => {
        try{
            const res = await axios.get(`https://crudcrud.com/api/8cda44ab23174116b936900e6ba39a91/${userEmail}`)
            console.log("this is on cart Click",res);
            setCartItems(res.data)
            
        }catch(err){
            console.log(err);
        }
       }
       fetchCartProducts();
    },[])


    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const res = await axios.get(`https://crudcrud.com/api/8cda44ab23174116b936900e6ba39a91/${userEmail}`)
                // console.log("this is on cart Click", res);
                setCartItems(res.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchCartProducts();
    }, [remove])

    



    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2>Cart:</h2>
                <Table >
                    <thead>
                        <tr>
                            <th style={{textDecoration:'underline', fontSize: '1.85rem'}}>Item</th>
                            <th className='price' style={{ textDecoration: 'underline', textAlign: 'center', fontSize: '1.85rem' }}>Price</th>
                            <th style={{ textDecoration: 'underline', textAlign: 'center', fontSize: '1.85rem' }}>Qunatity</th>
                        </tr>
                    </thead>
                    <tbody>
                            {cartItems.map((item)=>(
                                <tr key={item.id}> 
                                {console.log(item)}
                                <td><img className='pictures' src={item.imageUrl} alt='product' />{item.title}</td>
                                <td>${item.price}</td>
                                <td style={{textAlign:'center'}} >{item.quantity}
                                </td>
                                    <td><button onClick={() => removeFromCart(item._id)}>remove</button></td>
                            </tr>
                            ))}
                    </tbody>
                </Table>
                <p className='totalAmount'>Total Amount : ${calculatedTotalAmount()}</p>
                
            </div>
        </Modal>
    )
}

export default Cart;