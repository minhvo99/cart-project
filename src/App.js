import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BreadCrumb from './components/BreadCrumb';
import ProductContainer from './containers/ProductContainer';
import './App.css'
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BreadCrumb/>
        <ProductContainer/>
        <MessageContainer/>
        <CartContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;