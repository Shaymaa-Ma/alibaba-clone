import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const state = location.state as any;

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Thank You for Your Order!</h1>
      <p className="text-xl mb-4">Your order has been placed successfully.</p>
      <p className="mb-2">Total Paid: <strong>${state?.total?.toFixed(2)}</strong></p>
      <p className="mb-4">Shipping to: <strong>{state?.address}</strong></p>
      <p className="mb-8">Shipping Method: <strong>{state?.shipping}</strong></p>
      <Link to="/products" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
