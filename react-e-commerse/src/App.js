import NavigationBar from './Components/Navbar';
import Header from './Components/Header';
import Items from './Components/ItemsSection';
import Footer from './Components/Footer';
import AddContact from './Components/AddContact';
import React, { useContext, useState } from 'react';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import About from './Components/About';
import Home from './Components/Home';
import ProductDetail from './Components/ProductDetail';
import { Route, Routes , Navigate} from 'react-router-dom';
import AuthContext from './Components/AuthContext';
import AuthPage from './Components/AuthPage';


function App() {


  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);



  async function addDetailsHandler(details) {
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
          
          <Routes>
            {!authCtx.isLoggedIn && <Route path='/auth' element={<AuthPage />} exact />}

            <Route path='/home' element={<Home />} exact />
            
            <Route path='/store' element={<Items />} exact />
            
            <Route path='/about' element={<About />} exact />
            
            <Route path='/contact' element={<AddContact onAddDetails={addDetailsHandler} />} exact />
            
            <Route path='/products/:id' element={<ProductDetail />} exact />

            <Route path='*' element = {<Navigate to={"/auth"}/>} />
          
          </Routes>


        </CartProvider>
        <Footer />

      </div>


    </>

  );
}

export default App;
