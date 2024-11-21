import { Star } from 'lucide-react';

const dishes = [
  {
    name: "Biryani",
    description: "Kolkata-style aromatic biryani with potato",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    rating: 4.8
  },
  {
    name: "Fish Curry",
    description: "Traditional Bengali fish curry with rice",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80",
    rating: 4.7
  },
  {
    name: "Phuchka",
    description: "Street-style phuchka with spicy water",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    rating: 4.9
  }
];

export default function PopularDishes() {
  return (
    <section className="py-20 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Dishes</h2>
          <p className="text-xl text-gray-600">Discover our most loved Bengali delicacies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                  <span className="text-xl font-bold text-orange-600">{dish.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{dish.rating}</span>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}