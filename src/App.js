import './general-css/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ModalCart from './components/Cart/Cart/Cart.jsx';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/Detail/ItemDetailContainer.jsx';
import CartContextProvider from './context/CartContext';
import HomePage from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (

    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>

          {/* Content */}
          <Routes>
            <Route path='/react/' element={<HomePage />}></Route>
            <Route path='/react/products' element={<ItemListContainer />}></Route>
            <Route path='/react/cart' element={<ModalCart />}></Route>
            <Route path='/react/category/:catId' element={<ItemListContainer />}></Route>
            <Route path='/react/item/:prodId' element={<ItemDetailContainer />}></Route>
            <Route path='/react/checkout' element={<Checkout/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
