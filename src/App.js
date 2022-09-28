
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className='row'>
        <div className='col-2 side-bar'>
          <div>
            <SideBar />
          </div>
        </div>

        <div className='col-10'><Routes>
          <Route
            path='/'
            element=<Home />
          >
          </Route>
          <Route
            path='products'
            element={<Products />}
          >
            

          </Route>
          <Route
              path='/products/add'
              element={<AddProduct />}
            >
            </Route>
            <Route
              path='/products/:productId'
              element={<ProductDetails/>}
            >
            </Route>
        </Routes>
        </div>


      </div>
    </div>
  );
}

export default App;
