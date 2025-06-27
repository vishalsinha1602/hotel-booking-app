import React from 'react';
import { Button } from '../ui/button';
import { SERVICE_LIST } from '@/config/app.config';
import Icon from '../ui/icon';
const Header = () => {
  return (
    <header className="bg-brand py-2">
      <div className="container flex justify-between items-center ">
        <div id="logo-wrapper">
          <a href="#">
            <img width={144} src="/assets/booking.com.svg" alt="" />
          </a>
        </div>
        <div id="auth" className="flex gap-2 justify-center items-center">
          <Button className="bg-white cursor-pointer border-primary rounded-sm text-primary hover:bg-white/95">
            Register
          </Button>
          <Button className="bg-white cursor-pointer border-primary rounded-sm text-primary hover:bg-white/95">
            Login
          </Button>
        </div>
      </div>
      <div className="container flex gap-1">
        {SERVICE_LIST.map((item) => (
          <Button
            className={`bg-transparent shadow-none font-normal rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-between gap-2 px-6 h-11  transform transition-all duration-200 hover:scale-95 ${
              item.active && 'border border-white bg-white/10 '
            }`}
            key={item.id}
          >
            <Icon icon={item.icon} />
            {item.title}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
