import NavigationBar from './Components/Navbar';
import Header from './Components/Header';
import Items from './Components/ItemsSection';
import Footer from './Components/Footer';
import { useState } from 'react';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


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
      <div>


        <Router>
          <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <NavigationBar onShow={showCartHandler} />
            <Header />
            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/' element={<Items />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Routes>
          </CartProvider>
          <Footer />
        </Router>
      </div>


    </>

  );
}

export default App;
