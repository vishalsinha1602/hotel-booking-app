import React from 'react';
import Icon from '@/components/ui/icon';
import { Star, CheckCircle } from 'lucide-react';

const HotelMetaDetails = ({ hotelData, hotelInfo }) => {
  return (
    <>
      <section className="space-y-4">
        <div className="flex">
          <div className="flex-1 space-y-1">
            <h1 className="text-2xl font-bold">{hotelData.name}</h1>
            <p className="text-muted-foreground">{`${hotelData.contactInfo?.address}, ${hotelData.city}`}</p>
          </div>
          <div className="">
            <div className="flex gap-2 items-center justify-center bg-brand px-2 py-1 rounded-t-sm text-white">
              <span className="text-base font-bold">4.8</span>
              <Icon size="14" className="fill-white" icon="star" />
            </div>
            <div className="bg-secondary rounded-b-sm px-2 py-1 flex items-center justify-center">
              <span className="text-xs">663 Ratings</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-1.5 py-1 rounded bg-gray-100 w-fit font-semibold">
          <Icon size="14" icon="gem" />
          <span className="text-xs">Company-Serviced</span>
        </div>
        <div className="flex items-center gap-2 px-2 text-xs">
          <Icon icon="curve" className="-mt-4 stroke-gray-400" />
          <p>5.0 · Check-in rating &gt; Delightful experience</p>
        </div>
        <div className="text-orange-500 bg-orange-50 flex gap-1 p-2 items-center border rounded-sm">
          <Icon icon="heart" size="16" />
          <p className="text-sm font-medium">
            Located Less Than 5 Km From Medanta Hospital | Located 3 Kms From
            Omaxe Celebration Mall
          </p>
        </div>
      </section>
      <section className="space-y-4 my-8">
        <h2 className="text-xl font-bold">Amenities</h2>
        <ul className="flex flex-wrap gap-2">
          {hotelData.amenities.map((item, index) => (
            <li key={index} className="flex gap-2 items-center min-w-[180px]">
              <Icon icon="check" size="18" className="text-green-600" />
              <span className="text-sm font-medium text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-4 my-8">
        <h2 className="text-xl font-bold">About this Property</h2>
        <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
          {hotelInfo.description}
        </p>
      </section>
    </>
  );
};

export default HotelMetaDetails;

// const HotelMetaDetails = ({ hotelData, hotelInfo }) => {
//   return (
//     <>
//       <section className="w-full max-w-4xl mx-auto p-4">
//         {/* Header */}
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-2xl font-bold">{hotelData.hotel.name}</h1>
//             <p className="text-sm text-gray-600">
//               {hotelData.hotel.contactInfo.address} , {hotelData.hotel.city}
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
//             <span className="font-medium">4.8</span>
//             <span className="text-sm text-gray-500">(463 Ratings)</span>
//           </div>
//         </div>

//         {/* Badge */}
//         <div className="mt-2 flex items-center space-x-2 text-green-600 text-sm">
//           <CheckCircle className="h-4 w-4" />
//           <span>5.0 · Check-in rating · Delightful experience</span>
//         </div>

//         {/* Location Tags */}
//         <div className="mt-2 flex flex-wrap gap-2">
//           <span className="bg-orange-100 border border-green-500 text-orange-500 text-xs px-2 py-1 rounded">
//             Located Less Than 5 Km From Medanta Hospital | Located 3 Km From
//             Omaxe Celebration Mall
//           </span>
//         </div>

//         {/* Amenities */}
//         <div className="mt-4">
//           <h2 className="font-semibold mb-2">Amenities</h2>
//           <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
//             {hotelData.hotel.amenities.map((item) => (
//               <li key={item} className="flex items-center space-x-2">
//                 <CheckCircle className="h-4 w-4 text-green-500" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* About Section */}
//         <div className="mt-4">
//           <h2 className="font-semibold mb-2">About this OYO</h2>
//           <p className="text-sm text-gray-700">{hotelInfo.description}</p>
//         </div>
//       </section>
//       <section>
//         <h1 className="text-2xl font-bold">Choose Your Room</h1>
//       </section>
//     </>
//   );
// };

// export default HotelMetaDetails;
