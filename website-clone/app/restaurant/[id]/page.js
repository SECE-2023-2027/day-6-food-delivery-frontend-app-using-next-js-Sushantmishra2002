import restaurants from '../../data/restaurants';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function RestaurantDetail({ params }) {
  const { id } = params;
  const restaurant = restaurants.find(r => r.id === Number(id));

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500">Restaurant not found.</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 flex-1">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-400 mb-2">
          Home / Noida / <span className="text-black font-medium">{restaurant.name}</span>
        </div>
        {/* Restaurant Name */}
        <h1 className="text-2xl font-bold text-black mb-2">{restaurant.name}</h1>
        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-4">
          <button className="px-2 pb-2 border-b-2 border-black font-semibold text-black">Order Online</button>
          <button className="px-2 pb-2 text-gray-400 font-semibold">Dineout</button>
        </div>
        {/* Info/Warning Box */}
        <div className="bg-orange-100 text-orange-700 text-sm rounded-lg px-4 py-2 mb-6 border border-orange-200 max-w-2xl">
          <span>Uh-oh! Outlet is not accepting orders at the moment. They should be back by 11:00 AM tomorrow</span>
        </div>
        {/* Restaurant Info Card */}
        <div className="bg-white rounded-xl shadow p-4 mb-8 border border-gray-200 max-w-2xl">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex gap-2 items-center mb-1">
                <span className="font-bold text-lg text-black">{restaurant.rating}</span>
                <span className="text-xs text-gray-500">(100+ ratings)</span>
                <span className="mx-2 text-gray-300">·</span>
                <span className="text-black font-semibold">{restaurant.price}</span>
              </div>
              <div className="text-sm text-blue-700 mb-1 cursor-pointer hover:underline">South Indian, Chinese</div>
              <div className="text-xs text-gray-500 mb-1">Outlet: Crossing Republic</div>
              <div className="text-xs text-red-500 font-semibold">Closed & not delivering</div>
            </div>
            <div className="w-32 h-24 relative hidden md:block">
              <Image src={restaurant.image} alt={restaurant.name} fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
        {/* Recommended Section */}
        <section className="max-w-2xl">
          <h2 className="text-lg font-bold mb-2 text-black">Recommended ({restaurant.menu ? restaurant.menu.length : 0})</h2>
          <div className="flex flex-col gap-4">
            {restaurant.menu && restaurant.menu.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white rounded-lg shadow p-3 border border-gray-100">
                <div className="flex-1">
                  <div className="font-semibold text-base text-black mb-1">{item.name}</div>
                  <div className="text-sm text-gray-700">₹{item.price}</div>
                  <div className="text-xs text-gray-400 mt-1">Farm Pizza: Freshly baked Italian Pizza with secret recipe of cheesy, spicy & creamy jalapeno cheese sauce on top filled with 100% mozzarella cheese.</div>
                </div>
                <div className="w-24 h-16 relative ml-4 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Enable dynamic params for Next.js app router
export async function generateStaticParams() {
  return restaurants.map(r => ({ id: r.id.toString() }));
}
