import React from 'react';
import { Link } from 'react-router-dom';
import electronicsImg from '../assets/electronics.png';
import fashionImg from '../assets/fashion.png';
import beautyImg from '../assets/beauty.png';
import homeDecorImg from '../assets/decor.png';
import earPhoneImg from '../assets/ear-phone.png';
import smartWatchImg from '../assets/smart-watch.png';
import phoneCaseImg from '../assets/phoneCase.png';
import laptopStandImg from '../assets/laptop-stand.png';
import bluetoothSpeakerImg from '../assets/bluetoothSpeaker.png';
import projectorImg from '../assets/projector.png';

const Home = () => {
  const featuredCategories = [
    { id: 1, name: 'Electronics', image: electronicsImg, clickable: true },
    { id: 2, name: 'Fashion', image: fashionImg, clickable: false },
    { id: 3, name: 'Beauty & Personal Care', image: beautyImg, clickable: false },
    { id: 4, name: 'Home Decor', image: homeDecorImg, clickable: false },
  ];

  // Featured products in requested order
  const featuredProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 49.99, originalPrice: 99.99, image: earPhoneImg },
    { id: 2, name: 'Smart Watch', price: 99.99, originalPrice: 199.99, image: smartWatchImg },
    { id: 5, name: 'Waterproof Bluetooth Speaker', price: 49.99, image: bluetoothSpeakerImg },
    { id: 3, name: 'Adjustable Laptop Stand', price: 70.99, originalPrice: 114.99, image: laptopStandImg },
    { id: 6, name: 'Portable Mini Projector', price: 70.99, image: projectorImg },
    { id: 4, name: 'Protective Phone Case', price: 14.99, originalPrice: 29.99, image: phoneCaseImg },
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-orange-500 text-white py-10 sm:py-16 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
          Welcome to Alibaba Clone
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 leading-relaxed">
          Your One-Stop Shop for Global Trade
        </p>
        <Link
          to="/products"
          className="inline-block bg-white text-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition duration-200"
        >
          Start Shopping
        </Link>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 flex flex-col md:flex-row gap-6 sm:gap-8">
        {/* Categories Sidebar */}
        <div className="w-full md:w-1/4 space-y-4">
          <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-700">Categories for you</h3>
          <div className="flex md:flex-col gap-3 sm:gap-4 overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-gray-300 pb-2 snap-x snap-mandatory">
            {featuredCategories.map((category) =>
              category.clickable ? (
                <Link
                  key={category.id}
                  to="/products"
                  className="flex-none md:flex-auto w-36 sm:w-40 md:w-full p-3 sm:p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-200 flex items-center min-w-[140px] snap-start"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-2 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-semibold truncate">{category.name}</span>
                </Link>
              ) : (
                <div
                  key={category.id}
                  className="flex-none md:flex-auto w-36 sm:w-40 md:w-full p-3 sm:p-4 bg-white rounded-lg shadow opacity-50 cursor-not-allowed flex items-center min-w-[140px] snap-start"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-2 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-semibold truncate">{category.name}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Products & Banner */}
        <div className="w-full md:w-3/4 space-y-6 sm:space-y-8">
          {/* Featured Products Scroll */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-700">Frequently searched</h3>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="relative flex-none w-40 sm:w-44 md:w-48 lg:w-52 bg-gray-50 rounded-lg p-3 sm:p-4 shadow snap-start hover:shadow-lg transition duration-200 flex-shrink-0"
                >
                  {/* Discount Badge if originalPrice exists */}
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      50% OFF
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-contain mb-2"
                  />
                  <h4 className="text-xs sm:text-sm md:text-base font-semibold truncate">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-xs sm:text-sm">${product.originalPrice}</span>
                    )}
                    <span className="text-orange-500 font-bold text-sm sm:text-base">${product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="bg-orange-100 p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-center sm:text-left">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2 leading-tight break-words">
                Mega Sale Up to <span className="text-red-500">50% Off!</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Grab your favorite products at unbeatable prices
              </p>
            </div>
            <Link
              to="/deals"
              className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-orange-600 transition duration-200 flex-shrink-0 whitespace-nowrap"
            >
              Shop Deals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
