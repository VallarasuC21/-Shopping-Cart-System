import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Shopping Cart System</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
