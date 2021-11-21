import './general-css-scss/styles.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ModalCart from './components/CartModal/CartModal.jsx';
import ItemList from './components/Container/ItemListContainer.jsx';

function App() {

  return (
    <div className="App">

      <header>
        <NavBar />
      </header>

      <ModalCart />

      {/* Content */}
      <div className="content">
        <ItemList item='Products' />
      </div>

    </div>
  );
}

export default App;
