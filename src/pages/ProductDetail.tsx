import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';

// Import images
import earPhoneImg from '../assets/ear-phone.png';
import smartWatchImg from '../assets/smart-watch.png';
import phoneCaseImg from '../assets/phoneCase.png';
import laptopStandImg from '../assets/laptop-stand.png';
import bluetoothSpeakerImg from '../assets/bluetoothSpeaker.png';
import projectorImg from '../assets/projector.png';
import powerBankImg from '../assets/powerbank.png';
import keyboardImg from '../assets/keyboard.png';
import gimbalImg from '../assets/gimbal.png';

// Product type
interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    sales: number;
    image: string;
    description?: string;
    features?: string[];
    images?: string[];
    reviews?: number;
    seller?: {
        name: string;
        rating: number;
        products: number;
        responseRate: number;
    };
}

const ProductDetail = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const products: Product[] = [
        {
            id: 1,
            name: 'Wireless Earbuds',
            price: 49.99,
            originalPrice: 99.99,
            rating: 4.5,
            sales: 1200,
            image: earPhoneImg,
            description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
            features: ['Active Noise Cancellation', 'Up to 24 hours battery life', 'Bluetooth 5.0', 'Water resistant', 'Touch controls'],
            images: [earPhoneImg, earPhoneImg, earPhoneImg],
            reviews: 1200,
            seller: { name: 'Tech Gadgets Store', rating: 4.8, products: 1500, responseRate: 98 },
        },
        {   
            id: 2,
            name: 'Smart Watch',
            price: 99.99,
            originalPrice: 199.99,
            rating: 4.3,
            sales: 800,
            image: smartWatchImg,
            description: 'Feature-rich smartwatch with health tracking, notifications, and long battery life.',
            features: ['Heart rate monitoring', 'Sleep tracking', 'Water resistant', 'Notifications', 'Exercise tracking'],
            images: [smartWatchImg, smartWatchImg, smartWatchImg],
            reviews: 800,
            seller: { name: 'Smart Gear Shop', rating: 4.6, products: 1200, responseRate: 95 },
        },
        {
            id: 3,
            name: 'Laptop Stand',
            price: 70.99,
            originalPrice: 141.99,
            rating: 4.7,
            sales: 2000,
            image: laptopStandImg,
            description: 'Ergonomic laptop stand for improved posture and comfort while working.',
            features: ['Adjustable height', 'Portable design', 'Anti-slip surface', 'Heat dissipation', 'Universal compatibility'],
            images: [laptopStandImg, laptopStandImg, laptopStandImg],
            reviews: 2000,
            seller: { name: 'Office Essentials', rating: 4.9, products: 800, responseRate: 99 },
        },
        {
            id: 4,
            name: 'Phone Case',
            price: 14.99,
            originalPrice: 29.99,
            rating: 4.2,
            sales: 3000,
            image: phoneCaseImg,
            description: 'Durable phone case to protect your device from scratches and drops.',
            features: ['Shock absorption', 'Slim design', 'Precise cutouts', 'Lightweight', 'Easy grip'],
            images: [phoneCaseImg, phoneCaseImg, phoneCaseImg],
            reviews: 3000,
            seller: { name: 'Case World', rating: 4.5, products: 1000, responseRate: 97 },
        },


        {
            id: 5,
            name: 'Bluetooth Speaker',
            price: 49.99,
            rating: 4.6,
            sales: 1500,
            image: bluetoothSpeakerImg,
            description: 'Protect your device in style with our Premium Shockproof Silicone Phone Case, designed for maximum protection and a sleek look.',
            features: [
                'Waterproof',
                'Silicone',
                'Shockproof & Anti-Scratch',
                'Slim & Lightweight',
            ],
            images: [
                bluetoothSpeakerImg, bluetoothSpeakerImg, bluetoothSpeakerImg
            ],
            reviews: 1200,
            seller: {
                name: 'Tech Gadgets Store',
                rating: 4.8,
                products: 1500,
                responseRate: 98,
            },
        }, {
            id: 6,
            name: 'Portable Mini Projector',
            price: 70.99,
            rating: 4.6,
            sales: 1800,
            image: projectorImg,
            description: 'Compact mini projector for home cinema, presentations, and gaming. Easy to carry and set up.',
            features: [
                '1080p support',
                'Portable and lightweight',
                'HDMI/USB input (connect your phone easily)',
                'Built-in speaker',
                'Wireless screen mirroring compatible with Android & iPhone',
            ],

            images: [
                projectorImg, projectorImg, projectorImg
            ],
        },
        {
            id: 7,
            name: 'Portable Power Bank 10000mAh',
            price: 29.99,
            rating: 4.5,
            sales: 2100,
            image: powerBankImg,
            description: 'High-capacity power bank to charge your phone and devices on-the-go.',
            features: [
                '10000mAh capacity',
                'Dual USB output',
                'Fast charging',
                'Compact and lightweight',
            ],
            images: [
                powerBankImg, powerBankImg, powerBankImg
            ],
            reviews: 2100,
            seller: {
                name: 'Mobile Essentials',
                rating: 4.7,
                products: 800,
                responseRate: 96,
            },
        }, {
            id: 8,
            name: 'RGB Mechanical Gaming Keyboard with Wireless Mouse Combo',
            price: 59.99,
            rating: 4.6,
            sales: 1700,
            image: keyboardImg,
            description: 'High-performance RGB mechanical gaming keyboard paired with a wireless gaming mouse. Perfect for gamers who want customizable lighting and precise control.',
            features: [
                'Mechanical switches for fast response',
                'Customizable RGB backlighting',
                'Anti-ghosting keys',
                'Includes wireless gaming mouse',
                'USB wired connection for keyboard',
            ],
            images: [
                keyboardImg, keyboardImg, keyboardImg
            ],
            reviews: 1700,
            seller: {
                name: 'GamerZone',
                rating: 4.8,
                products: 500,
                responseRate: 95,
            },
        },
        {
            id: 9,
            name: '3-Axis Smartphone Gimbal Stabilizer',
            price: 89.99,
            rating: 4.7,
            sales: 1300,
            image: gimbalImg,
            description: 'Keep your videos smooth and professional with this 3-axis gimbal stabilizer for smartphones.',
            features: [
                '3-axis stabilization',
                'Foldable & portable',
                'Bluetooth control',
                'Supports Android & iPhone',
            ],
            images: [
                gimbalImg, gimbalImg, gimbalImg
            ],
            reviews: 1300,
            seller: {
                name: 'VideoTech',
                rating: 4.9,
                products: 400,
                responseRate: 97,
            },
        }

    ];

    const product = products.find((p) => p.id === parseInt(id || '1'));

    if (!product) return <div className="container mx-auto px-4 py-8">Product not found</div>;

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value > 0) setQuantity(value);
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
        });
        alert(`${quantity} x ${product.name} added to cart!`);
    };

    return (
        <div className="container mx-auto px-4 py-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Images */}
                <div className="relative space-y-4">
                    {product.originalPrice && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white font-bold px-4 py-2 rounded-br-lg shadow-lg z-20 text-lg md:text-xl">
                            50% OFF
                        </div>
                    )}
                    <img src={product.images?.[0] || product.image} alt={product.name} className="w-full rounded-lg z-10" />
                    <div className="grid grid-cols-3 gap-4">
                        {(product.images || [product.image, product.image]).slice(1).map((img, idx) => (
                            <img key={idx} src={img} alt={`${product.name} ${idx + 2}`} className="w-full rounded-lg cursor-pointer hover:opacity-75" />
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-orange-500">{product.name}</h1>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center text-gray-500">
                                <StarIcon className="h-5 w-5 text-yellow-400" />
                                <span className="ml-1">{product.rating}</span>
                            </div>
                            <span className="text-gray-600">{product.reviews || product.sales} reviews</span>
                        </div>
                    </div>

                    {/* Price with discount */}
                    {product.originalPrice ? (
                        <div className="text-3xl font-bold text-orange-500 flex items-baseline space-x-3">
                            <span className="line-through text-gray-400 text-xl">${product.originalPrice.toFixed(2)}</span>
                            <span>${product.price.toFixed(2)}</span>
                        </div>
                    ) : (
                        <div className="text-3xl font-bold text-orange-500">${product.price.toFixed(2)}</div>
                    )}

                    {product.description && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-orange-400">Description</h2>
                            <p className="text-gray-600">{product.description}</p>
                        </div>
                    )}

                    {product.features && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-orange-400">Key Features</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {product.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex items-center space-x-4">
                        <label className="font-medium text-orange-500">Quantity:</label>
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-20 px-3 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center justify-center"
                        >
                            <ShoppingCartIcon className="h-5 w-5 mr-2" /> Add to Cart
                        </button>
                        <button className="flex-1 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;