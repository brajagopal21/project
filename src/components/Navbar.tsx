import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              Insta Bhoj
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
            {token ? (
              <Link to="/dashboard" className="bg-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <ShoppingBag size={20} />
                <span>My Orders</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-orange-600 hover:text-orange-700">Login</Link>
                <Link to="/register" className="bg-orange-600 text-white px-4 py-2 rounded-full">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</Link>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
            {token ? (
              <Link to="/dashboard" className="block w-full bg-orange-600 text-white px-4 py-2 rounded-full text-center">
                My Orders
              </Link>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-orange-600 hover:text-orange-700">Login</Link>
                <Link to="/register" className="block w-full bg-orange-600 text-white px-4 py-2 rounded-full text-center">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}