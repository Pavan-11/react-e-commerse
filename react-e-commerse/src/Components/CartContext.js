import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const calculatedTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    const totalItems = () => {
        return cartItems.length;
    }

    

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculatedTotalAmount, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;