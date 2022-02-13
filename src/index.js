import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppProducts from './components/AppProducts';
import Home from './components/home/Home';
import NotFound404 from './components/NotFound404';
import UserDetail from './components/users/detail/UserDetail.js';
import ProductDetail from './components/products/productDetail/ProductDetail.js'
import './assets/css/app.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>

<Routes>

  <Route path='/' element={ <Home />}/>
  <Route path='users' element={ <App />}/>
  <Route path='users/:id' element={<UserDetail/>}/>
  <Route path='products' element={ <AppProducts />}/>
  <Route path='products/:id' element={<ProductDetail/>}/>
  <Route path='*' element={ <NotFound404 />}/>
  
  


</Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
