import React from 'react';

import HotelRoomPicker from './hotel-rooms-picker';
import PropertViewCarousel from './propert-view-carousel';
import HotelMetaDetails from './hotel-meta-details';
import HotelPolicy from './hotel-policy';
import { HotelCheckoutCard } from './hotel-checkout-card';
import { HOTEL_DATA, HOTEL_INFO } from './hotel-details-dummy-data';

const HotelDetails = () => {
  const hotel_data = HOTEL_DATA;
  const hotel_info = HOTEL_INFO;
  return (
    <div className="mt-0.5 mb-12">
      <PropertViewCarousel images={hotel_data.hotel.photos} />
      <div className="container flex ">
        <div className="flex-1 space-y-8">
          <HotelMetaDetails
            hotelData={hotel_data.hotel}
            hotelInfo={hotel_info}
          />
          <HotelRoomPicker rooms={hotel_data.rooms} />
          <HotelPolicy hotelPolicy={hotel_info.hotelPolicy} />
        </div>
        <aside className="w-[340px] h-[400px] mx-10  mt-3 sticky top-6 border border-gray-200 rounded-lg p-4 shadow-sm">
          <HotelCheckoutCard
            rooms={hotel_data.rooms}
            cancellationPolicy={hotel_info.cancellationPolicy}
          />
        </aside>
      </div>
    </div>
  );
};

export default HotelDetails;
