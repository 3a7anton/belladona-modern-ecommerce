import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ShopNavbar from './ShopNavbar';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  if (state.items.length === 0) {
    return (
      <div className="cart-page">
        <ShopNavbar />
        <div className="cart-container">
          <motion.div
            className="empty-cart"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <motion.button
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <ShopNavbar />
      <div className="cart-container">
        <motion.div
          className="cart-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Shopping Cart</h1>
          <p>{state.totalItems} item{state.totalItems !== 1 ? 's' : ''} in your cart</p>
        </motion.div>

        <div className="cart-content">
          <motion.div
            className="cart-items"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {state.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">{item.price}</div>
                </div>
                <div className="item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  {formatPrice(parseFloat(item.price.replace('$', '')) * item.quantity)}
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="cart-summary"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal ({state.totalItems} items)</span>
              <span>{formatPrice(state.totalPrice)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>{formatPrice(state.totalPrice)}</span>
            </div>
            
            <div className="cart-actions">
              <motion.button
                className="checkout-btn"
                onClick={handleCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>
              
              <motion.button
                className="clear-cart-btn"
                onClick={clearCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Clear Cart
              </motion.button>
              
              <motion.button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Shopping
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 