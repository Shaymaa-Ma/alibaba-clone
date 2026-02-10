import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [shipping, setShipping] = useState<'standard' | 'express'>('standard');
  const [payment, setPayment] = useState<'card' | 'paypal' | 'cod'>('card');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = cart.reduce<number>((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shippingCost = shipping === 'express' ? 20 : 10;
  const total = subtotal + tax + shippingCost;

  const handleCheckout = () => {
    if (!address.trim()) return setError('Please enter your shipping address.');
    if (!shipping) return setError('Please select a shipping method.');
    if (!payment) return setError('Please select a payment method.');
    
    // Card validation
    if (payment === 'card') {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
        return setError('Please fill in all card details.');
      }
    }

    setError('');
    setProcessing(true);

    setTimeout(() => {
      clearCart();
      setProcessing(false);
      navigate('/order-confirmation', { state: { total, address, shipping, payment } });
    }, 2000); // simulate payment processing delay
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Method</h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  checked={shipping === 'standard'}
                  onChange={() => setShipping('standard')}
                  className="accent-orange-500"
                />
                Standard - $10
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  checked={shipping === 'express'}
                  onChange={() => setShipping('express')}
                  className="accent-orange-500"
                />
                Express - $20
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === 'card'}
                  onChange={() => setPayment('card')}
                  className="accent-orange-500"
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={payment === 'paypal'}
                  onChange={() => setPayment('paypal')}
                  className="accent-orange-500"
                />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === 'cod'}
                  onChange={() => setPayment('cod')}
                  className="accent-orange-500"
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Card Fields */}
          {payment === 'card' && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-400 transition"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="w-1/2 border p-2 rounded focus:ring-2 focus:ring-orange-400 transition"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="w-1/2 border p-2 rounded focus:ring-2 focus:ring-orange-400 transition"
                />
              </div>
            </div>
          )}

          {error && <p className="text-red-500 font-semibold">{error}</p>}

          <button
            onClick={handleCheckout}
            disabled={processing}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition
              ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
          >
            {processing ? (payment === 'paypal' ? 'Redirecting to PayPal...' : 'Processing Payment...') : 'Place Order'}
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow space-y-3">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between">Subtotal: ${subtotal.toFixed(2)}</div>
          <div className="flex justify-between">Tax (10%): ${tax.toFixed(2)}</div>
          <div className="flex justify-between">Shipping: ${shippingCost.toFixed(2)}</div>
          <div className="flex justify-between font-bold text-lg">Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
