
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import restaurants from './data/restaurants';

export default function Home() {
  // Top chains: first 10 for carousel, delivery: all for grid
  const topChains = restaurants.slice(0, 10);
  const delivery = restaurants;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <RestaurantList title="Top restaurant chains in Noida" restaurants={topChains} />
        <RestaurantList title="Restaurants with online food delivery in Noida" restaurants={delivery} />
      </main>
      <Footer />
    </div>
  );
}
