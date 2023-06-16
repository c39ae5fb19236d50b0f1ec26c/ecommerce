import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Products } from './components/Products';
import { Categories } from './components/Categories';
import { ProductDetail } from './components/ProductDetail';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { IndexPage } from './components/IndexPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;