import logo from './logo.svg';
import './App.css';
import BasicNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
        <BasicNavbar />
        <ItemListContainer greeting='Hola Comision 34860' />
        <ItemCount />
    </div>
  );
}

export default App;