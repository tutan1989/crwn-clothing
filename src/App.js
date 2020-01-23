import React from 'react';
import HopePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path="/" component={HopePage} />
      <Route path="/shop" component={ShopPage} /> 
      </Switch> 
    </div>
  );
}

export default App;
