import logo from './logo.svg';
import './App.css';
import './css-scss/styles.css';
import NavBar from './components/navbar/NavBar.jsx';
import ModalCart from './components/cartmodal/CartModal.jsx';
import ItemListContainer from './components/itemlist/ItemList.jsx';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
        <div className="row item">
          <ItemListContainer item='hombre'/>
          <ItemListContainer item='mujer'/>
          <ItemListContainer item='niños'/>
          <ItemListContainer item='marcas'/>
          <ItemListContainer item='deportes'/>
        </div>
      </header>

      <ModalCart />

      {/* Content */}
      <div className="content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Created by Lucas Zorzin</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      
    </div>
  );
}

export default App;
