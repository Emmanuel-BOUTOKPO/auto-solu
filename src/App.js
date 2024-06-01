import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Post from './pages/post/Post';
import Detail from './pages/detail/Detail';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <>
<ToastContainer />
      <Router> 
        <Routes>
          <Route exact path='/' element={<Home />} />  
          <Route path="/shop" element={<Shop />} />
          <Route path="/post" element={<Post />} />
          <Route path="/detail/:id" element={<Detail />} /> 
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
