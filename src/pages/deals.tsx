import React from 'react';
import { Link } from 'react-router-dom';
import earPhoneImg from '../assets/ear-phone.png';
import smartWatchImg from '../assets/smart-watch.png';
import phoneCaseImg from '../assets/phoneCase.png';
import laptopStandImg from '../assets/laptop-stand.png';

const dealsProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 29.99, originalPrice: 59.99, image: earPhoneImg },
    { id: 2, name: 'Smart Watch', price: 79.99, originalPrice: 159.99, image: smartWatchImg },
    { id: 3, name: 'Adjustable Laptop Stand', price: 59.99, originalPrice: 119.99, image: laptopStandImg },
    { id: 4, name: 'Protective Phone Case', price: 9.99, originalPrice: 19.99, image: phoneCaseImg },
];

const Deals = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">Shop Deals</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {dealsProducts.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
                    >
                        {/* Discount Badge */}
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                            50% OFF
                        </div>

                        {/* Product Image */}
                        <div className="w-32 h-32 mb-4 overflow-hidden rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain transform transition-transform hover:scale-110"
                            />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>

                        {/* Price */}
                        <div className="mb-4 text-center">
                            <span className="text-gray-400 line-through mr-2">${product.originalPrice}</span>
                            <span className="text-orange-500 font-bold">${product.price}</span>
                        </div>

                        {/* Button: Link to the real product detail */}
                        <Link
                            to={`/products/${product.id}`}
                            className="mt-auto bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            View Product
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
