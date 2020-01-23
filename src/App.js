import React from 'react';
import HopePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HopePage} />
      <Route path="/shop" component={ShopPage} />  
    </div>
  );
}

export default App;
