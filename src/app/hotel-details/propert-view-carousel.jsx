import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PropertViewCarousel = ({ images }) => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto">
        <Carousel
          className=" w-full overflow-hidden p-3 "
          opts={{
            align: 'start',
            loop: true,
            breakpoints: {
              '(min-width:1024px)': { slidesToScroll: 2 },
            },
          }}
        >
          <CarouselContent className=" ">
            {images.map((image, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 basis-full ">
                <div className="w-full h-96 overflow-hidden  ">
                  <img
                    className="w-full h-full rounded-2xl object-cover  "
                    src={image}
                    alt={`Image index: ${index}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="
              absolute top-1/2 -translate-y-1/2 left-5 z-10
              flex items-center justify-center
              w-10 h-10
              bg-black/80 hover:bg-white
              rounded-full shadow-lg
              text-gray-700 hover:text-black
              transition
            "
          />
          <CarouselNext
            className="
              absolute top-1/2 -translate-y-1/2 right-5 z-10
              flex items-center justify-center
              w-10 h-10
              bg-white/80 hover:bg-white
              rounded-full shadow-md
              text-gray-700 hover:text-black
              transition
            "
          />
        </Carousel>
      </div>
    </section>
  );
};

export default PropertViewCarousel;
