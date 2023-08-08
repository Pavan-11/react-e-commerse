import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();



export const CartProvider = ({ children }) => {

    const [remove, setRemove] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const userEmail = localStorage.getItem('email').replace('@', '').replace('.', "");

    const addToCart = async (item) => {
        setCartItems([...cartItems, item]);
        console.log('this is item', item);
        try {
            const res = await axios.post(`https://crudcrud.com/api/8cda44ab23174116b936900e6ba39a91/${userEmail}`, { ...item })
            // console.log('this is on addting to cart' ,res.data._id)//need this id to remove the element
        } catch (err) {
            console.log(err);
        }
    };

    const removeFromCart = async (itemId) => {
        // setCartItems((...prevItems) => prevItems.filter((item) => item.id !== itemId));
        try {
            const response = await axios.delete(`https://crudcrud.com/api/8cda44ab23174116b936900e6ba39a91/${userEmail}/${itemId}`)
            axios.get(`https://crudcrud.com/api/8cda44ab23174116b936900e6ba39a91/${userEmail}`).then(response => setCartItems(response.data))
            .catch(err => console.log(err.message));
            console.log("itemId",itemId)
            const items = cartItems.filter((item) => item._id !== itemId);
            setCartItems(items);
            console.log("itemss",items);
            setRemove(!remove);
        } catch (error) {
            console.error('Error removing item from cart: ', error.message)
        }
    };


    useEffect(()=>{
        axios.get(`https://crudcrud.com/api/8cda44ab23174116b936900e6ba39a91/${userEmail}`).then(response => setCartItems(response.data))
            .catch(err => console.log(err.message));
    },[])

    const calculatedTotalAmount = () => {

        console.log("this is cartItems",cartItems);

        let total = 0

        for (let i in cartItems) {
            total += cartItems[i].price * 1;
        }
        console.log("this is total",total);
        return total;
    }



    const totalItems = () => {
        return cartItems.length;
    }



    return (
        <CartContext.Provider value={{ remove, addToCart, removeFromCart, calculatedTotalAmount, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;