import './general-css/styles.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ModalCart from './components/Cart/CartModal/CartModal.jsx';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer.js';

function App() {

  return (
    <div className="App">

      <header>
        <NavBar />
      </header>

      <ModalCart />

      {/* Content */}
      <div className="content">
        <ItemListContainer/>
      </div>

    </div>
  );
}

export default App;
