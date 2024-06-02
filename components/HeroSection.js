'use client';

import React from 'react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="bg-cover bg-center text-white py-20 px-10 object-fill" style={{ backgroundImage: `url('/menu-hero.jpg')` }}>
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to Moon River Thai Restaurant where Seoul meets Food
        </h1>
        <p className="text-xl mt-5">
          Most authentic Thai cuisine you{'\''}ll ever experience
        </p>
        <Link href="/menu" className="mt-10 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          MENU
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;