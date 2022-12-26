import logo from './logo.svg';
import './App.css';
import BasicNavbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
        <CartWidget />
        <ItemListContainer greeting='Hola Comision 34860' />
        <BasicNavbar />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;