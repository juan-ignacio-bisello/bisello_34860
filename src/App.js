import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contex/CartContex';
import { NotificationProvider } from './notification/NotificationService';
import Checkout from './components/Checkout/Checkout'
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Todos los productos' />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;