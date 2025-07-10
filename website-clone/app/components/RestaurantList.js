"use client";
import React, { useRef, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ title, restaurants }) => {
  // Determine if this is the carousel or grid section
  const isTopChains = title.toLowerCase().includes('top restaurant chains');
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;
  const carouselCount = 10;

  // Carousel logic for top chains
  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - visibleCount, 0));
  };
  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + visibleCount, Math.max(restaurants.length - visibleCount, 0)));
  };

  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4 text-black">{title}</h2>
      {isTopChains ? (
        <div className="relative">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 disabled:opacity-30"
            disabled={startIdx === 0}
            style={{ left: '-2rem' }}
          >
            {'<'}
          </button>
          <div className="flex gap-6 overflow-hidden">
            {restaurants.slice(startIdx, startIdx + carouselCount).map((rest, idx) => (
              <div key={rest.id} style={{ minWidth: '15rem', maxWidth: '15rem' }}>
                <RestaurantCard {...rest} />
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 disabled:opacity-30"
            disabled={startIdx + visibleCount >= restaurants.length}
            style={{ right: '-2rem' }}
          >
            {'>'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {restaurants.map((rest) => (
            <RestaurantCard key={rest.id} {...rest} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RestaurantList;
