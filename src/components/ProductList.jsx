import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../app/storageReducer';
import products from '../data/products.json';

const ProductList = ({ countFn }) => {
    const dispatch = useDispatch();

    const handleBuyClick = (product) => {
        countFn();
        dispatch(addItem({ ...product, id: Date.now() }));
    };

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}</p>
                        <button onClick={() => handleBuyClick(product)}>Купить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

