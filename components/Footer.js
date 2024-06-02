'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="bg-yellow-200 text-gray-500">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-xl mb-2">About Us</h2>
            <p>
              For general comments or questions about catering needs,
              reservations, ordering, menu items etc., please call MoonRiver Thai
              Restaurant directly during business hours.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Contact Us</h2>
            <h2 className="text-lg font-bold">PHONE:</h2>
          <p>+1 434-791-2939</p>
          <h2 className="text-lg font-bold">EMAIL:</h2>
          <p>contact@moonriverthai.com</p>
          <h2 className="text-lg font-bold">ADDRESS:</h2>
          <p>627 N Main St, Danville, VA, </p>
          <p>United States, Virginia</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Careers</h2>
            <ul>
              <li>Cooks</li>
              <li>Servers</li>
              <li>Dishwashers</li>
            </ul>
            <p>Call us for more details</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Hours of Operation</h2>
            <p>Mon - Thurs 11am - 9pm</p>
            <p>Fri & Sat 11am - 10pm</p>
            <p>Sunday 12pm – 7pm</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Quick Links</h2>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/oQ7kQKh3ydppbGCF/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                {/* Facebook SVG */}
              </Link>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;