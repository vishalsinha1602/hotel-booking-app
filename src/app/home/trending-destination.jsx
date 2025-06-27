import React from 'react';
import { TRENDING_DESTINATIONS } from '@/config/app.config';
import { getAssestPath } from '@/lib/utils';

const TrendingDestination = () => {
  return (
    <section className="  container my-25 ">
      <div className=" mb-4 space-y-2 ">
        <h2 className="text-black text-2xl font-bold mt-10">
          Trending Destinations
        </h2>
        <p className="text-base text-muted-foreground">
          Most popular choices for travellers from india
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4 ">
        {TRENDING_DESTINATIONS.map((destination, index) => (
          <div
            key={index}
            className={`h-[270px] rounded-lg overflow-hidden relative transform transition-all duration-300 hover:scale-102 hover:shadow-lg  ${destination.className}`}
          >
            <img
              className="object-cover rounded-lg size-full"
              src={getAssestPath(destination.image)}
              alt=""
            />
            <div className="absolute top-0 z-10 inset-0 bg-black/40 ">
              <div className="p-3 ">
                <h3 className="font-bold text-2xl text-white drop-shadow-md">
                  {destination.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingDestination;
