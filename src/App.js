import logo from './logo.svg';
import './App.css';
import './css-scss/styles.css';
import NavBar from './components/navbar/NavBar.jsx';
import ModalCart from './components/cartmodal/CartModal.jsx';
import ItemListNav from './components/itemlist/ItemList.jsx';
import ItemList from './components/container/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
        <div className="row item">
          <ItemListNav item='hombre'/>
          <ItemListNav item='mujer'/>
          <ItemListNav item='niños'/>
          <ItemListNav item='marcas'/>
          <ItemListNav item='deportes'/>
        </div>
      </header>

      <ModalCart />

      {/* Content */}
      <div className="content">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemList item='Created by Lucas Zorzin'/>
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
