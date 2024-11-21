import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Authentic Bengali Cuisine
              <span className="text-orange-600"> Delivered Fresh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From street-side phuchka to home-style machher jhol, experience the taste of Kolkata at your doorstep.
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-orange-700 transition">
                <span>Order Now</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition">
                View Menu
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80"
              alt="Bengali Thali"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium">2,000+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}