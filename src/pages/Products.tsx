import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import earPhoneImg from '../assets/ear-phone.png';
import smartWatchImg from '../assets/smart-watch.png';
import phoneCaseImg from '../assets/phoneCase.png';
import laptopStandImg from '../assets/laptop-stand.png';
import bluetoothSpeakerImg from '../assets/bluetoothSpeaker.png';
import projectorImg from '../assets/projector.png';
import powerBankImg from '../assets/powerbank.png';
import keyboardImg from '../assets/keyboard.png';
import gimbalImg from '../assets/gimbal.png';

const Products = () => {
    const [sortBy, setSortBy] = useState('popular');
    const products = [
        { id: 1, name: 'Wireless Earbuds', price: 49.99, originalPrice: 99.99, rating: 4.5, sales: 1200, image: earPhoneImg },
        { id: 2, name: 'Smart Watch', price: 99.99, originalPrice: 199.99, rating: 4.3, sales: 800, image: smartWatchImg },
        { id: 5, name: 'Waterproof Bluetooth Speaker', price: 49.99, rating: 4.6, sales: 1500, image: bluetoothSpeakerImg },
        { id: 3, name: 'Laptop Stand', price: 70.99, originalPrice: 141.99, rating: 4.7, sales: 2000, image: laptopStandImg },
        { id: 8, name: 'RGB Mechanical Gaming Keyboard', price: 59.99, rating: 4.6, sales: 1700, image: keyboardImg },
        { id: 6, name: 'Portable Mini Projector', price: 70.99, rating: 4.4, sales: 2500, image: projectorImg },
        { id: 4, name: 'Phone Case', price: 14.99, originalPrice: 29.99, rating: 4.2, sales: 3000, image: phoneCaseImg },
        { id: 7, name: 'Portable Power Bank 10000mAh', price: 29.99, rating: 4.5, sales: 2100, image: powerBankImg },
        { id: 9, name: '3-Axis Smartphone Gimbal', price: 89.99, rating: 4.7, sales: 1300, image: gimbalImg },
    ];

    const categories = [
        'Electronics',
        'Fashion',
        'Home & Garden',
        'Sports',
        'Beauty',
        'Automotive',
        'Health',
        'Toys',
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full md:w-64 space-y-6">
                    <div>
                        <h1 className="text-lg font-semibold mb-4 flex items-center text-orange-500 font-bold mt-6">
                            <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                            Filters
                        </h1>
                        <div className="space-y-4">
                            <div className="element-categories space-y-2">
                                {categories.map((category) => (
                                    <label key={category} className="flex items-center">
                                        <input type="checkbox" className="rounded text-orange-500 mr-2" />
                                        {category}
                                    </label>
                                ))}
                            </div>
                            <div className="min-and-max-price">
                                <h4 className="font-medium mb-2 text-center md:text-left text-black">Price Range</h4>
                                <div className="flex items-center space-x-2">
                                    <input type="number" placeholder="Min" className="w-20 px-2 py-1 border rounded" />
                                    <input type="number" placeholder="Max" className="w-20 px-2 py-1 border rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    {/* Sort Controls */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600">{products.length} products found</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border rounded-lg px-3 py-1"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                to={`/products/${product.id}`}
                                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                {/* Big Discount Ribbon Badge */}
                                {product.originalPrice && (
                                    <div className="absolute top-2 left-2 bg-red-600 text-white font-bold px-3 py-1 rounded-br-lg shadow-lg z-20 text-sm md:text-base">
                                        50% OFF
                                    </div>
                                )}

                                {/* Product Image */}
                                <div className="h-64 p-4 flex items-center justify-center bg-white overflow-visible rounded-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-h-full w-auto object-contain transform transition-transform hover:scale-110 z-10"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

                                    {product.originalPrice ? (
                                        <div className="mb-2">
                                            <span className="text-gray-400 line-through mr-2">${product.originalPrice}</span>
                                            <span className="text-orange-500 font-bold">${product.price}</span>
                                        </div>
                                    ) : (
                                        <p className="text-orange-500 font-bold mb-2">${product.price}</p>
                                    )}

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>★ {product.rating}</span>
                                        <span>{product.sales} sold</span>
                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
