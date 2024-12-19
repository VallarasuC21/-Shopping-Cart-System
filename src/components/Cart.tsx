import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { updateQuantity, removeItem } from '../store/cartSlice';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong> - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </div>
            <div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                min="1"
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${cart.totalPrice}</h3>
    </div>
  );
};

export default Cart;
