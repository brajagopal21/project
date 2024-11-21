import { Clock, Truck, Heart, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Fresh food delivered within 30 minutes"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Authentic Bengali recipes from expert chefs"
  },
  {
    icon: Truck,
    title: "Live Tracking",
    description: "Real-time updates on your order status"
  },
  {
    icon: ThumbsUp,
    title: "Best Quality",
    description: "Premium ingredients for the perfect taste"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}