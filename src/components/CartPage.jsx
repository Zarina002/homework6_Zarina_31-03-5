import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
    const products = useSelector((state) => state.storage.products);

    if (!products || products.length === 0) {
        return <p>Корзина пуста</p>;
    }

    return (
        <div>
            <h2>Корзина товаров</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;