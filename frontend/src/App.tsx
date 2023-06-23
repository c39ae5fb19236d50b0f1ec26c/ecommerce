import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products } from './components/Products';
import { Categories } from './components/Categories';
import { ProductDetail } from './components/ProductDetail';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { IndexPage } from './components/IndexPage';
import { Cart } from './components/Cart';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;