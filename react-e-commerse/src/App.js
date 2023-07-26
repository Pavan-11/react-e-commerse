import NavigationBar from './Components/Navbar';
import Header from './Components/Header';
import Items from './Components/ItemsSection';
import DownCartButton from './Components/Button';
import Footer from './Components/Footer';
import { useState } from 'react';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <NavigationBar onShow={showCartHandler} />
        <Header />
        <Items />
      </CartProvider>
      <DownCartButton />
      <Footer />

    </>

  );
}

export default App;
