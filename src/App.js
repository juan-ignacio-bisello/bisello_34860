import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      {/* <ItemCount /> */}
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Todos los productos' />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;