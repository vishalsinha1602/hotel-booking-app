import React from 'react';
import { FOOTER_SECTION } from '@/config/app.config';
import { SOCIAL_LINKS } from '@/config/app.config';
import Icon from '../ui/icon';

const Footer = () => {
  return (
    <footer className="min-h-[150px] bg-accent pt-10  text-black text-base">
      <div className="container grid grid-cols-2 mb-5 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {FOOTER_SECTION.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-lg mb-4">{section.title}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="text-sm hover:underline hover:text-primary transition-colors"
                    target={link.href.startsWith('https') ? '_blank' : '_self'}
                    rel={
                      link.href.startsWith('https')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BottomBar */}

      <div className="bg-brand min-h-[50px] flex flex-col md:flex-row items-center justify-between px-5 md:px-8 py-4 text-white text-sm">
        {/* Social Icons */}
        <div className="flex gap-4 mb-2 md:mb-0">
          {SOCIAL_LINKS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="hover:text-primary transition-colors"
            >
              <Icon icon={item.icon} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          © 2025 Booking.com™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
