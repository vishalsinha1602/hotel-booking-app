import React from 'react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return (
    <section className=" relative min-h-[400px] bg-black">
      <img
        className=" size-full mx-auto object-cover  absolute z-[1]     inset-0 "
        src="\assets\hero-image-1440.jpeg"
        alt=""
      />
      <div className="z-[2]  relative container space-y-2 ">
        <h1 className=" mt-4 text-4xl font-extrabold text-white  md:text-5xl leading-tight  ">
          Travel has never <span className="block">felt this cosy</span>
        </h1>
        <p className="text-xl font-medium leading-snug text-white md:text-2xl">
          Book an entire place all for yourself
        </p>
        <Button className="mt-6 h-12 px-4  cursor-pointer text-base leading-tight ">
          Discovery Holiday Rentals
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
