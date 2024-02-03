import React, { useState } from 'react';
import ProductList from './ProductList';
import '../styles.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartPage from './CartPage';

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleCount = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <BrowserRouter>
            <h1>Store</h1>
            <nav style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart</Link>
                <p>Количество товаров в корзине: {cartCount}</p>
            </nav>
            <Routes>
                <Route path="/" element={<ProductList countFn={handleCount} />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;