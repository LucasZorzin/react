import './general-css/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ModalCart from './components/Cart/Cart/Cart.jsx';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/Detail/ItemDetailContainer.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar/>
        </header>

        {/* Content */}
        <Routes>
          <Route exact path='/react' element={<ItemListContainer />}></Route>
          <Route path='/cart' element={<ModalCart />}></Route>
          <Route path='/category/:catId' element={<ItemListContainer />}></Route>
          <Route path='/item/:prodId' element={<ItemDetailContainer />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
