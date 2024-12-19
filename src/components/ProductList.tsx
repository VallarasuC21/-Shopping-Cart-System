import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const products = [
  { id: '1', name: 'Product A', price: 100 },
  { id: '2', name: 'Product B', price: 200 },
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: { id: string; name: string; price: number }) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
