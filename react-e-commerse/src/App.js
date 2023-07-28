import NavigationBar from './Components/Navbar';
import Header from './Components/Header';
import Items from './Components/ItemsSection';
import Footer from './Components/Footer';
import AddContact from './Components/AddContact';
import React ,{ useState } from 'react';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import About from './Components/About';
import Home from './Components/Home';
import {Route} from 'react-router-dom';


function App() {

  
  const [cartIsShown, setCartIsShown] = useState(false);



  async function  addDetailsHandler(details) {
    const response = await fetch('https://e-commerse-3c306-default-rtdb.firebaseio.com/details.json', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      <div>
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <NavigationBar onShow={showCartHandler} />
          <Header />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/store">
            <Items />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/contact">
            <AddContact onAddDetails = {addDetailsHandler} />
          </Route>
         
        </CartProvider>
        <Footer />

      </div>


    </>

  );
}

export default App;
