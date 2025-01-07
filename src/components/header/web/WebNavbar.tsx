import React, { useState } from 'react';
import {
  FaTshirt,
  FaFemale,
  FaShoePrints,
  FaShoppingBag,
  FaHatCowboy,
  FaHeartbeat,
} from 'react-icons/fa';
import { PiPantsFill } from 'react-icons/pi';
import { GiMonclerJacket, GiConverseShoe } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: '상의', icon: <FaTshirt /> },
  { id: 2, name: '아우터', icon: <GiMonclerJacket /> },
  { id: 3, name: '바지', icon: <PiPantsFill /> },
  { id: 4, name: '원피스', icon: <FaFemale /> },
  { id: 5, name: '신발', icon: <GiConverseShoe /> },
  { id: 6, name: '가방', icon: <FaShoppingBag /> },
  { id: 7, name: '패션소품', icon: <FaHatCowboy /> },
  { id: 8, name: '뷰티', icon: <FaHeartbeat /> },
];

function WebNavbar() {
  return (
    <div className="bg-white md:px-8 2xl:px-8 lg:flex lg:h-16 items-center max-w-[1024px] hidden headerBottom mx-auto box-content ease-in-out border-b border-jnGray-300">
      <nav className="-ml-7 flex w-full relative lg:flex ps-3.5">
        {categories.map(category => (
          <div
            key={category.id}
            className="cursor-pointer flex items-center group relative"
          >
            <Link
              to={`musinsa/category/${category.id}`} // 카테고리 id에 따라 페이지 이동
              className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 group-hover:text-green-600"
            >
              <span className="mr-2 text-xl group-hover:rotate-12 transition-transform duration-300">
                {category.icon}
              </span>
              {category.name}
            </Link>
            {/* 카테고리 밑줄 */}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default WebNavbar;
