import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ShopNavbar from './ShopNavbar';
import './CheckoutPage.css';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutPage: React.FC = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    // For now, we'll just show a success message
    setCurrentStep(4);
    clearCart();
  };

  const handleBackToShop = () => {
    navigate('/shop');
  };

  if (state.items.length === 0 && currentStep !== 4) {
    return (
      <div className="checkout-page">
        <ShopNavbar />
        <div className="checkout-container">
          <motion.div
            className="empty-checkout"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="empty-checkout-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>You need to add items to your cart before checkout.</p>
            <motion.button
              className="back-to-shop-btn"
              onClick={handleBackToShop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Shop
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <ShopNavbar />
      <div className="checkout-container">
        <motion.div
          className="checkout-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Review</span>
            </div>
          </div>
        </motion.div>

        <div className="checkout-content">
          <motion.div
            className="checkout-form"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {currentStep === 1 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Shipping Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <motion.button
                  className="next-btn"
                  onClick={handleNextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue to Payment
                </motion.button>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Payment Information</h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="cardName">Cardholder Name</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <motion.button
                    className="prev-btn"
                    onClick={handlePrevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    className="next-btn"
                    onClick={handleNextStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Review Order
                  </motion.button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Review Your Order</h2>
                <div className="review-section">
                  <h3>Shipping Information</h3>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.address}</p>
                  <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                  <p>{formData.country}</p>
                  <p>Email: {formData.email}</p>
                  <p>Phone: {formData.phone}</p>
                </div>
                <div className="review-section">
                  <h3>Payment Information</h3>
                  <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                  <p>Expires: {formData.expiryDate}</p>
                </div>
                <div className="form-actions">
                  <motion.button
                    className="prev-btn"
                    onClick={handlePrevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    className="submit-btn"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Place Order
                  </motion.button>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                className="success-step"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="success-icon">✅</div>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
                <motion.button
                  className="back-to-shop-btn"
                  onClick={handleBackToShop}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue Shopping
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="order-summary"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <h2>Order Summary</h2>
            <div className="order-items">
              {state.items.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                    <span>{formatPrice(parseFloat(item.price.replace('$', '')) * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <div className="total-item">
                <span>Subtotal</span>
                <span>{formatPrice(state.totalPrice)}</span>
              </div>
              <div className="total-item">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="total-item final">
                <span>Total</span>
                <span>{formatPrice(state.totalPrice)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 